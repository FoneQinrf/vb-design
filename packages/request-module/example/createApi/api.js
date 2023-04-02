/* eslint-disable */
import axios from 'axios';
import qs from 'qs';
let domain = '';
let axiosInstance = axios.create();
export const getDomain = () => {
  return domain;
};
export const setDomain = $domain => {
  domain = $domain;
};
export const getAxiosInstance = () => {
  return axiosInstance;
};
export const setAxiosInstance = $axiosInstance => {
  axiosInstance = $axiosInstance;
};
export const request = (method, url, body, queryParameters, form, config) => {
  method = method.toLowerCase();
  let keys = Object.keys(queryParameters);
  let queryUrl = url;
  if (keys.length > 0) {
    queryUrl = url + '?' + qs.stringify(queryParameters);
  }
  if (!config) {
    config = {
      showNetworkError: true,
    };
  }
  // let queryUrl = url+(keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
  if (body) {
    return axiosInstance[method](queryUrl, body, config);
  } else if (method === 'get' || method === 'delete' || method === 'head' || method === 'option') {
    return axiosInstance[method](queryUrl, config);
  } else {
    return axiosInstance[method](queryUrl, qs.stringify(form), config);
  }
};
/*==========================================================
 *                    HTTP服务接口文档
 ==========================================================*/
/**
 * 查询服务日志
 * request: queryServiceLogReqUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param req - req
 */
export const queryServiceLogReqUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/cod/codServiceLog/query';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryServiceLogReqUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/cod/codServiceLog/query'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryServiceLogReqUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/cod/codServiceLog/query';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/cod/codServiceLog/query',
    queryTType: 'post',
  };
  return result;
};
/**
 * 保存服务日志
 * request: saveServiceLogReqUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param req - req
 */
export const saveServiceLogReqUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/cod/codServiceLog/save';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const saveServiceLogReqUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/cod/codServiceLog/save'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const saveServiceLogReqUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/cod/codServiceLog/save';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/cod/codServiceLog/save',
    queryTType: 'post',
  };
  return result;
};
/**
 * 健康管理计划测量表提交
 * request: completeGaugeUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param req - req
 */
export const completeGaugeUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/cod/healthManage/completeGauge';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const completeGaugeUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/cod/healthManage/completeGauge'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const completeGaugeUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/cod/healthManage/completeGauge';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/cod/healthManage/completeGauge',
    queryTType: 'post',
  };
  return result;
};
/**
 * 健康管理计划父任务完成
 * request: completeFatherTaskUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param planNumber - planNumber
 * @param currSort - currSort
 */
export const completeFatherTaskUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/cod/healthManage/completePlanTask';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['planNumber'] !== undefined) {
    queryParameters['planNumber'] = parameters['planNumber'];
  }
  if (parameters['currSort'] !== undefined) {
    queryParameters['currSort'] = parameters['currSort'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const completeFatherTaskUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/cod/healthManage/completePlanTask'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['planNumber'] !== undefined) {
    queryParameters['planNumber'] = parameters['planNumber'];
  }
  if (parameters['currSort'] !== undefined) {
    queryParameters['currSort'] = parameters['currSort'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const completeFatherTaskUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/cod/healthManage/completePlanTask';
  if (parameters['planNumber'] !== undefined) {
    queryParameters['planNumber'] = parameters['planNumber'];
  }
  if (parameters['currSort'] !== undefined) {
    queryParameters['currSort'] = parameters['currSort'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/cod/healthManage/completePlanTask',
    queryTType: 'post',
  };
  return result;
};
/**
 * 健康管理计划子任务完成
 * request: completeChildTaskUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param taskId - taskId
 */
export const completeChildTaskUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/cod/healthManage/completeTask';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['taskId'] !== undefined) {
    queryParameters['taskId'] = parameters['taskId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const completeChildTaskUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/cod/healthManage/completeTask'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['taskId'] !== undefined) {
    queryParameters['taskId'] = parameters['taskId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const completeChildTaskUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/cod/healthManage/completeTask';
  if (parameters['taskId'] !== undefined) {
    queryParameters['taskId'] = parameters['taskId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/cod/healthManage/completeTask',
    queryTType: 'post',
  };
  return result;
};
/**
 * 健康管理计划测量表查询
 * request: getGaugeListUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param taskId - taskId
 */
export const getGaugeListUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/cod/healthManage/gaugeList';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['taskId'] !== undefined) {
    queryParameters['taskId'] = parameters['taskId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const getGaugeListUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/cod/healthManage/gaugeList'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['taskId'] !== undefined) {
    queryParameters['taskId'] = parameters['taskId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const getGaugeListUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/cod/healthManage/gaugeList';
  if (parameters['taskId'] !== undefined) {
    queryParameters['taskId'] = parameters['taskId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/cod/healthManage/gaugeList',
    queryTType: 'post',
  };
  return result;
};
/**
 * 健康管理计划测量表答案
 * request: getAnswerListUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param taskId - taskId
 */
export const getAnswerListUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/cod/healthManage/getAnswerList';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['taskId'] !== undefined) {
    queryParameters['taskId'] = parameters['taskId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const getAnswerListUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/cod/healthManage/getAnswerList'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['taskId'] !== undefined) {
    queryParameters['taskId'] = parameters['taskId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const getAnswerListUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/cod/healthManage/getAnswerList';
  if (parameters['taskId'] !== undefined) {
    queryParameters['taskId'] = parameters['taskId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/cod/healthManage/getAnswerList',
    queryTType: 'post',
  };
  return result;
};
/**
 * 健康管理计划详情
 * request: getHealthManageInfoUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param req - req
 */
export const getHealthManageInfoUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/cod/healthManage/info';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const getHealthManageInfoUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/cod/healthManage/info'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const getHealthManageInfoUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/cod/healthManage/info';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/cod/healthManage/info',
    queryTType: 'post',
  };
  return result;
};
/**
 * 健康管理计划列表
 * request: healthManageListUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param req - req
 */
export const healthManageListUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/cod/healthManage/list';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const healthManageListUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/cod/healthManage/list'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const healthManageListUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/cod/healthManage/list';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/cod/healthManage/list',
    queryTType: 'post',
  };
  return result;
};
/**
 * queryUnreadCount
 * request: queryUnreadCountUsingGET
 * @param X-Fast-UserId - X-Fast-UserId
 */
export const queryUnreadCountUsingGET = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/cod/sys/v1/notice/unreadCount';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const queryUnreadCountUsingGET_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/cod/sys/v1/notice/unreadCount'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const queryUnreadCountUsingGETURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/cod/sys/v1/notice/unreadCount';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/cod/sys/v1/notice/unreadCount',
    queryTType: 'get',
  };
  return result;
};
/**
 * queryYkfUserIdByHnId
 * request: queryYkfUserIdByHnIdUsingGET
 * @param phone - phone
 */
export const queryYkfUserIdByHnIdUsingGET = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/cod/sys/v1/online/userid/query';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['phone'] !== undefined) {
    queryParameters['phone'] = parameters['phone'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const queryYkfUserIdByHnIdUsingGET_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/cod/sys/v1/online/userid/query'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['phone'] !== undefined) {
    queryParameters['phone'] = parameters['phone'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const queryYkfUserIdByHnIdUsingGETURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/cod/sys/v1/online/userid/query';
  if (parameters['phone'] !== undefined) {
    queryParameters['phone'] = parameters['phone'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/cod/sys/v1/online/userid/query',
    queryTType: 'get',
  };
  return result;
};
/**
 * queryUserNotice
 * request: queryUserNoticeUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param req - req
 */
export const queryUserNoticeUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/cod/sys/v1/querynotice';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryUserNoticeUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/cod/sys/v1/querynotice'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryUserNoticeUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/cod/sys/v1/querynotice';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/cod/sys/v1/querynotice',
    queryTType: 'post',
  };
  return result;
};
/**
 * saveNotice
 * request: saveNoticeUsingPOST
 * @param req - req
 */
export const saveNoticeUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/cod/sys/v1/save/notice';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const saveNoticeUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/cod/sys/v1/save/notice'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const saveNoticeUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/cod/sys/v1/save/notice';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/cod/sys/v1/save/notice',
    queryTType: 'post',
  };
  return result;
};
/**
 * 根据条件查询消息数量
 * request: countByParamsUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param imMsgQueryApiReq - imMsgQueryApiReq
 */
export const countByParamsUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/countByParams';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['imMsgQueryApiReq'] !== undefined) {
    body = parameters['imMsgQueryApiReq'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const countByParamsUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/countByParams'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['imMsgQueryApiReq'] !== undefined) {
    body = parameters['imMsgQueryApiReq'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const countByParamsUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/hospital/im/msg/countByParams';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/hospital/im/msg/countByParams',
    queryTType: 'post',
  };
  return result;
};
/**
 * 消息历史
 * request: historyUsingGET
 * @param X-Fast-UserId - X-Fast-UserId
 * @param imMsgHistoryReq - imMsgHistoryReq
 */
export const historyUsingGET = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/history';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['imMsgHistoryReq'] !== undefined) {
    body = parameters['imMsgHistoryReq'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const historyUsingGET_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/history'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['imMsgHistoryReq'] !== undefined) {
    body = parameters['imMsgHistoryReq'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const historyUsingGETURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/hospital/im/msg/history';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/hospital/im/msg/history',
    queryTType: 'get',
  };
  return result;
};
/**
 * 消息历史
 * request: historyUsingHEAD
 * @param X-Fast-UserId - X-Fast-UserId
 * @param imMsgHistoryReq - imMsgHistoryReq
 */
export const historyUsingHEAD = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/history';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['imMsgHistoryReq'] !== undefined) {
    body = parameters['imMsgHistoryReq'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('head', domain + path, body, queryParameters, form, config);
};
export const historyUsingHEAD_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/history'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['imMsgHistoryReq'] !== undefined) {
    body = parameters['imMsgHistoryReq'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('head', domain + path, body, queryParameters, form, config);
};
export const historyUsingHEADURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/hospital/im/msg/history';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/hospital/im/msg/history',
    queryTType: 'head',
  };
  return result;
};
/**
 * 消息历史
 * request: historyUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param imMsgHistoryReq - imMsgHistoryReq
 */
export const historyUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/history';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['imMsgHistoryReq'] !== undefined) {
    body = parameters['imMsgHistoryReq'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const historyUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/history'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['imMsgHistoryReq'] !== undefined) {
    body = parameters['imMsgHistoryReq'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const historyUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/hospital/im/msg/history';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/hospital/im/msg/history',
    queryTType: 'post',
  };
  return result;
};
/**
 * 消息历史
 * request: historyUsingPUT
 * @param X-Fast-UserId - X-Fast-UserId
 * @param imMsgHistoryReq - imMsgHistoryReq
 */
export const historyUsingPUT = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/history';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['imMsgHistoryReq'] !== undefined) {
    body = parameters['imMsgHistoryReq'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('put', domain + path, body, queryParameters, form, config);
};
export const historyUsingPUT_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/history'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['imMsgHistoryReq'] !== undefined) {
    body = parameters['imMsgHistoryReq'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('put', domain + path, body, queryParameters, form, config);
};
export const historyUsingPUTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/hospital/im/msg/history';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/hospital/im/msg/history',
    queryTType: 'put',
  };
  return result;
};
/**
 * 消息历史
 * request: historyUsingDELETE
 * @param X-Fast-UserId - X-Fast-UserId
 * @param imMsgHistoryReq - imMsgHistoryReq
 */
export const historyUsingDELETE = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/history';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['imMsgHistoryReq'] !== undefined) {
    body = parameters['imMsgHistoryReq'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config);
};
export const historyUsingDELETE_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/history'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['imMsgHistoryReq'] !== undefined) {
    body = parameters['imMsgHistoryReq'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config);
};
export const historyUsingDELETEURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/hospital/im/msg/history';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/hospital/im/msg/history',
    queryTType: 'delete',
  };
  return result;
};
/**
 * 消息历史
 * request: historyUsingOPTIONS
 * @param X-Fast-UserId - X-Fast-UserId
 * @param imMsgHistoryReq - imMsgHistoryReq
 */
export const historyUsingOPTIONS = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/history';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['imMsgHistoryReq'] !== undefined) {
    body = parameters['imMsgHistoryReq'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('options', domain + path, body, queryParameters, form, config);
};
export const historyUsingOPTIONS_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/history'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['imMsgHistoryReq'] !== undefined) {
    body = parameters['imMsgHistoryReq'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('options', domain + path, body, queryParameters, form, config);
};
export const historyUsingOPTIONSURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/hospital/im/msg/history';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/hospital/im/msg/history',
    queryTType: 'options',
  };
  return result;
};
/**
 * 消息历史
 * request: historyUsingPATCH
 * @param X-Fast-UserId - X-Fast-UserId
 * @param imMsgHistoryReq - imMsgHistoryReq
 */
export const historyUsingPATCH = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/history';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['imMsgHistoryReq'] !== undefined) {
    body = parameters['imMsgHistoryReq'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('patch', domain + path, body, queryParameters, form, config);
};
export const historyUsingPATCH_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/history'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['imMsgHistoryReq'] !== undefined) {
    body = parameters['imMsgHistoryReq'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('patch', domain + path, body, queryParameters, form, config);
};
export const historyUsingPATCHURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/hospital/im/msg/history';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/hospital/im/msg/history',
    queryTType: 'patch',
  };
  return result;
};
/**
 * 根据主键id查询im消息
 * request: queryByIdUsingGET_1
 * @param X-Fast-UserId - X-Fast-UserId
 * @param id - id
 */
export const queryByIdUsingGET_1 = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/queryById';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const queryByIdUsingGET_1_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/queryById'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const queryByIdUsingGET_1URL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/hospital/im/msg/queryById';
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/hospital/im/msg/queryById',
    queryTType: 'get',
  };
  return result;
};
/**
 * 根据主键id查询im消息
 * request: queryByIdUsingHEAD
 * @param X-Fast-UserId - X-Fast-UserId
 * @param id - id
 */
export const queryByIdUsingHEAD = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/queryById';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('head', domain + path, body, queryParameters, form, config);
};
export const queryByIdUsingHEAD_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/queryById'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('head', domain + path, body, queryParameters, form, config);
};
export const queryByIdUsingHEADURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/hospital/im/msg/queryById';
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/hospital/im/msg/queryById',
    queryTType: 'head',
  };
  return result;
};
/**
 * 根据主键id查询im消息
 * request: queryByIdUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param id - id
 */
export const queryByIdUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/queryById';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryByIdUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/queryById'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryByIdUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/hospital/im/msg/queryById';
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/hospital/im/msg/queryById',
    queryTType: 'post',
  };
  return result;
};
/**
 * 根据主键id查询im消息
 * request: queryByIdUsingPUT
 * @param X-Fast-UserId - X-Fast-UserId
 * @param id - id
 */
export const queryByIdUsingPUT = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/queryById';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('put', domain + path, body, queryParameters, form, config);
};
export const queryByIdUsingPUT_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/queryById'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('put', domain + path, body, queryParameters, form, config);
};
export const queryByIdUsingPUTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/hospital/im/msg/queryById';
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/hospital/im/msg/queryById',
    queryTType: 'put',
  };
  return result;
};
/**
 * 根据主键id查询im消息
 * request: queryByIdUsingDELETE
 * @param X-Fast-UserId - X-Fast-UserId
 * @param id - id
 */
export const queryByIdUsingDELETE = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/queryById';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config);
};
export const queryByIdUsingDELETE_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/queryById'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config);
};
export const queryByIdUsingDELETEURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/hospital/im/msg/queryById';
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/hospital/im/msg/queryById',
    queryTType: 'delete',
  };
  return result;
};
/**
 * 根据主键id查询im消息
 * request: queryByIdUsingOPTIONS
 * @param X-Fast-UserId - X-Fast-UserId
 * @param id - id
 */
export const queryByIdUsingOPTIONS = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/queryById';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('options', domain + path, body, queryParameters, form, config);
};
export const queryByIdUsingOPTIONS_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/queryById'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('options', domain + path, body, queryParameters, form, config);
};
export const queryByIdUsingOPTIONSURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/hospital/im/msg/queryById';
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/hospital/im/msg/queryById',
    queryTType: 'options',
  };
  return result;
};
/**
 * 根据主键id查询im消息
 * request: queryByIdUsingPATCH
 * @param X-Fast-UserId - X-Fast-UserId
 * @param id - id
 */
export const queryByIdUsingPATCH = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/queryById';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('patch', domain + path, body, queryParameters, form, config);
};
export const queryByIdUsingPATCH_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/queryById'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('patch', domain + path, body, queryParameters, form, config);
};
export const queryByIdUsingPATCHURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/hospital/im/msg/queryById';
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/hospital/im/msg/queryById',
    queryTType: 'patch',
  };
  return result;
};
/**
 * 根据消息msgId查询im消息
 * request: queryByMsgIdUsingGET
 * @param X-Fast-UserId - X-Fast-UserId
 * @param msgId - msgId
 */
export const queryByMsgIdUsingGET = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/queryByMsgId';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['msgId'] !== undefined) {
    queryParameters['msgId'] = parameters['msgId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const queryByMsgIdUsingGET_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/queryByMsgId'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['msgId'] !== undefined) {
    queryParameters['msgId'] = parameters['msgId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const queryByMsgIdUsingGETURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/hospital/im/msg/queryByMsgId';
  if (parameters['msgId'] !== undefined) {
    queryParameters['msgId'] = parameters['msgId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/hospital/im/msg/queryByMsgId',
    queryTType: 'get',
  };
  return result;
};
/**
 * 根据消息msgId查询im消息
 * request: queryByMsgIdUsingHEAD
 * @param X-Fast-UserId - X-Fast-UserId
 * @param msgId - msgId
 */
export const queryByMsgIdUsingHEAD = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/queryByMsgId';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['msgId'] !== undefined) {
    queryParameters['msgId'] = parameters['msgId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('head', domain + path, body, queryParameters, form, config);
};
export const queryByMsgIdUsingHEAD_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/queryByMsgId'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['msgId'] !== undefined) {
    queryParameters['msgId'] = parameters['msgId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('head', domain + path, body, queryParameters, form, config);
};
export const queryByMsgIdUsingHEADURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/hospital/im/msg/queryByMsgId';
  if (parameters['msgId'] !== undefined) {
    queryParameters['msgId'] = parameters['msgId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/hospital/im/msg/queryByMsgId',
    queryTType: 'head',
  };
  return result;
};
/**
 * 根据消息msgId查询im消息
 * request: queryByMsgIdUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param msgId - msgId
 */
export const queryByMsgIdUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/queryByMsgId';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['msgId'] !== undefined) {
    queryParameters['msgId'] = parameters['msgId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryByMsgIdUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/queryByMsgId'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['msgId'] !== undefined) {
    queryParameters['msgId'] = parameters['msgId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryByMsgIdUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/hospital/im/msg/queryByMsgId';
  if (parameters['msgId'] !== undefined) {
    queryParameters['msgId'] = parameters['msgId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/hospital/im/msg/queryByMsgId',
    queryTType: 'post',
  };
  return result;
};
/**
 * 根据消息msgId查询im消息
 * request: queryByMsgIdUsingPUT
 * @param X-Fast-UserId - X-Fast-UserId
 * @param msgId - msgId
 */
export const queryByMsgIdUsingPUT = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/queryByMsgId';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['msgId'] !== undefined) {
    queryParameters['msgId'] = parameters['msgId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('put', domain + path, body, queryParameters, form, config);
};
export const queryByMsgIdUsingPUT_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/queryByMsgId'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['msgId'] !== undefined) {
    queryParameters['msgId'] = parameters['msgId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('put', domain + path, body, queryParameters, form, config);
};
export const queryByMsgIdUsingPUTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/hospital/im/msg/queryByMsgId';
  if (parameters['msgId'] !== undefined) {
    queryParameters['msgId'] = parameters['msgId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/hospital/im/msg/queryByMsgId',
    queryTType: 'put',
  };
  return result;
};
/**
 * 根据消息msgId查询im消息
 * request: queryByMsgIdUsingDELETE
 * @param X-Fast-UserId - X-Fast-UserId
 * @param msgId - msgId
 */
export const queryByMsgIdUsingDELETE = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/queryByMsgId';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['msgId'] !== undefined) {
    queryParameters['msgId'] = parameters['msgId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config);
};
export const queryByMsgIdUsingDELETE_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/queryByMsgId'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['msgId'] !== undefined) {
    queryParameters['msgId'] = parameters['msgId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config);
};
export const queryByMsgIdUsingDELETEURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/hospital/im/msg/queryByMsgId';
  if (parameters['msgId'] !== undefined) {
    queryParameters['msgId'] = parameters['msgId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/hospital/im/msg/queryByMsgId',
    queryTType: 'delete',
  };
  return result;
};
/**
 * 根据消息msgId查询im消息
 * request: queryByMsgIdUsingOPTIONS
 * @param X-Fast-UserId - X-Fast-UserId
 * @param msgId - msgId
 */
export const queryByMsgIdUsingOPTIONS = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/queryByMsgId';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['msgId'] !== undefined) {
    queryParameters['msgId'] = parameters['msgId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('options', domain + path, body, queryParameters, form, config);
};
export const queryByMsgIdUsingOPTIONS_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/queryByMsgId'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['msgId'] !== undefined) {
    queryParameters['msgId'] = parameters['msgId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('options', domain + path, body, queryParameters, form, config);
};
export const queryByMsgIdUsingOPTIONSURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/hospital/im/msg/queryByMsgId';
  if (parameters['msgId'] !== undefined) {
    queryParameters['msgId'] = parameters['msgId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/hospital/im/msg/queryByMsgId',
    queryTType: 'options',
  };
  return result;
};
/**
 * 根据消息msgId查询im消息
 * request: queryByMsgIdUsingPATCH
 * @param X-Fast-UserId - X-Fast-UserId
 * @param msgId - msgId
 */
export const queryByMsgIdUsingPATCH = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/queryByMsgId';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['msgId'] !== undefined) {
    queryParameters['msgId'] = parameters['msgId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('patch', domain + path, body, queryParameters, form, config);
};
export const queryByMsgIdUsingPATCH_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/queryByMsgId'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['msgId'] !== undefined) {
    queryParameters['msgId'] = parameters['msgId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('patch', domain + path, body, queryParameters, form, config);
};
export const queryByMsgIdUsingPATCHURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/hospital/im/msg/queryByMsgId';
  if (parameters['msgId'] !== undefined) {
    queryParameters['msgId'] = parameters['msgId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/hospital/im/msg/queryByMsgId',
    queryTType: 'patch',
  };
  return result;
};
/**
 * 根据条件分页查询im消息
 * request: queryByParamsUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param imMsgListPageReq - imMsgListPageReq
 */
export const queryByParamsUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/queryByParams';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['imMsgListPageReq'] !== undefined) {
    body = parameters['imMsgListPageReq'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryByParamsUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/queryByParams'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['imMsgListPageReq'] !== undefined) {
    body = parameters['imMsgListPageReq'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryByParamsUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/hospital/im/msg/queryByParams';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/hospital/im/msg/queryByParams',
    queryTType: 'post',
  };
  return result;
};
/**
 * 消息已读，消息已读接口
 * request: readMsgListUsingGET
 * @param X-Fast-UserId - X-Fast-UserId
 * @param msgIdList - msgIdList
 */
export const readMsgListUsingGET = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/readMsgList';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['msgIdList'] !== undefined) {
    queryParameters['msgIdList'] = parameters['msgIdList'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const readMsgListUsingGET_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/readMsgList'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['msgIdList'] !== undefined) {
    queryParameters['msgIdList'] = parameters['msgIdList'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const readMsgListUsingGETURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/hospital/im/msg/readMsgList';
  if (parameters['msgIdList'] !== undefined) {
    queryParameters['msgIdList'] = parameters['msgIdList'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/hospital/im/msg/readMsgList',
    queryTType: 'get',
  };
  return result;
};
/**
 * 消息已读，消息已读接口
 * request: readMsgListUsingHEAD
 * @param X-Fast-UserId - X-Fast-UserId
 * @param msgIdList - msgIdList
 */
export const readMsgListUsingHEAD = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/readMsgList';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['msgIdList'] !== undefined) {
    queryParameters['msgIdList'] = parameters['msgIdList'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('head', domain + path, body, queryParameters, form, config);
};
export const readMsgListUsingHEAD_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/readMsgList'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['msgIdList'] !== undefined) {
    queryParameters['msgIdList'] = parameters['msgIdList'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('head', domain + path, body, queryParameters, form, config);
};
export const readMsgListUsingHEADURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/hospital/im/msg/readMsgList';
  if (parameters['msgIdList'] !== undefined) {
    queryParameters['msgIdList'] = parameters['msgIdList'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/hospital/im/msg/readMsgList',
    queryTType: 'head',
  };
  return result;
};
/**
 * 消息已读，消息已读接口
 * request: readMsgListUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param msgIdList - msgIdList
 */
export const readMsgListUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/readMsgList';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['msgIdList'] !== undefined) {
    queryParameters['msgIdList'] = parameters['msgIdList'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const readMsgListUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/readMsgList'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['msgIdList'] !== undefined) {
    queryParameters['msgIdList'] = parameters['msgIdList'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const readMsgListUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/hospital/im/msg/readMsgList';
  if (parameters['msgIdList'] !== undefined) {
    queryParameters['msgIdList'] = parameters['msgIdList'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/hospital/im/msg/readMsgList',
    queryTType: 'post',
  };
  return result;
};
/**
 * 消息已读，消息已读接口
 * request: readMsgListUsingPUT
 * @param X-Fast-UserId - X-Fast-UserId
 * @param msgIdList - msgIdList
 */
export const readMsgListUsingPUT = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/readMsgList';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['msgIdList'] !== undefined) {
    queryParameters['msgIdList'] = parameters['msgIdList'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('put', domain + path, body, queryParameters, form, config);
};
export const readMsgListUsingPUT_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/readMsgList'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['msgIdList'] !== undefined) {
    queryParameters['msgIdList'] = parameters['msgIdList'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('put', domain + path, body, queryParameters, form, config);
};
export const readMsgListUsingPUTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/hospital/im/msg/readMsgList';
  if (parameters['msgIdList'] !== undefined) {
    queryParameters['msgIdList'] = parameters['msgIdList'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/hospital/im/msg/readMsgList',
    queryTType: 'put',
  };
  return result;
};
/**
 * 消息已读，消息已读接口
 * request: readMsgListUsingDELETE
 * @param X-Fast-UserId - X-Fast-UserId
 * @param msgIdList - msgIdList
 */
export const readMsgListUsingDELETE = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/readMsgList';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['msgIdList'] !== undefined) {
    queryParameters['msgIdList'] = parameters['msgIdList'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config);
};
export const readMsgListUsingDELETE_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/readMsgList'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['msgIdList'] !== undefined) {
    queryParameters['msgIdList'] = parameters['msgIdList'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config);
};
export const readMsgListUsingDELETEURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/hospital/im/msg/readMsgList';
  if (parameters['msgIdList'] !== undefined) {
    queryParameters['msgIdList'] = parameters['msgIdList'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/hospital/im/msg/readMsgList',
    queryTType: 'delete',
  };
  return result;
};
/**
 * 消息已读，消息已读接口
 * request: readMsgListUsingOPTIONS
 * @param X-Fast-UserId - X-Fast-UserId
 * @param msgIdList - msgIdList
 */
export const readMsgListUsingOPTIONS = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/readMsgList';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['msgIdList'] !== undefined) {
    queryParameters['msgIdList'] = parameters['msgIdList'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('options', domain + path, body, queryParameters, form, config);
};
export const readMsgListUsingOPTIONS_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/readMsgList'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['msgIdList'] !== undefined) {
    queryParameters['msgIdList'] = parameters['msgIdList'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('options', domain + path, body, queryParameters, form, config);
};
export const readMsgListUsingOPTIONSURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/hospital/im/msg/readMsgList';
  if (parameters['msgIdList'] !== undefined) {
    queryParameters['msgIdList'] = parameters['msgIdList'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/hospital/im/msg/readMsgList',
    queryTType: 'options',
  };
  return result;
};
/**
 * 消息已读，消息已读接口
 * request: readMsgListUsingPATCH
 * @param X-Fast-UserId - X-Fast-UserId
 * @param msgIdList - msgIdList
 */
export const readMsgListUsingPATCH = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/readMsgList';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['msgIdList'] !== undefined) {
    queryParameters['msgIdList'] = parameters['msgIdList'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('patch', domain + path, body, queryParameters, form, config);
};
export const readMsgListUsingPATCH_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/readMsgList'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['msgIdList'] !== undefined) {
    queryParameters['msgIdList'] = parameters['msgIdList'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('patch', domain + path, body, queryParameters, form, config);
};
export const readMsgListUsingPATCHURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/hospital/im/msg/readMsgList';
  if (parameters['msgIdList'] !== undefined) {
    queryParameters['msgIdList'] = parameters['msgIdList'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/hospital/im/msg/readMsgList',
    queryTType: 'patch',
  };
  return result;
};
/**
 * 保存im消息
 * request: saveUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param req - req
 */
export const saveUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/save';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const saveUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/hospital/im/msg/save'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const saveUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/hospital/im/msg/save';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/hospital/im/msg/save',
    queryTType: 'post',
  };
  return result;
};
/**
 * 创建订单
 * request: createAddMingyOrderUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param req - req
 */
export const createAddMingyOrderUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/my/consult/createAddMingyOrder';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const createAddMingyOrderUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/my/consult/createAddMingyOrder'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const createAddMingyOrderUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/my/consult/createAddMingyOrder';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/my/consult/createAddMingyOrder',
    queryTType: 'post',
  };
  return result;
};
/**
 * 一问一答预创建订单
 * request: createInitialMingyOrderUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param req - req
 */
export const createInitialMingyOrderUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/my/consult/createInitialMingyOrder';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const createInitialMingyOrderUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/my/consult/createInitialMingyOrder'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const createInitialMingyOrderUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/my/consult/createInitialMingyOrder';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/my/consult/createInitialMingyOrder',
    queryTType: 'post',
  };
  return result;
};
/**
 * 名医专家说
 * request: myContentListUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param req - req
 */
export const myContentListUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/my/expert/contentList';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const myContentListUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/my/expert/contentList'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const myContentListUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/my/expert/contentList';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/my/expert/contentList',
    queryTType: 'post',
  };
  return result;
};
/**
 * 查询icdCode
 * request: queryIcdListUsingPOST
 * @param req - req
 */
export const queryIcdListUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/shop/icd/query';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryIcdListUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/shop/icd/query'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryIcdListUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/shop/icd/query';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/shop/icd/query',
    queryTType: 'post',
  };
  return result;
};
/**
 * 查询问题列表
 * request: queryQuestionListUsingPOST
 * @param req - req
 */
export const queryQuestionListUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/shop/question/query';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryQuestionListUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/shop/question/query'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryQuestionListUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/shop/question/query';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/shop/question/query',
    queryTType: 'post',
  };
  return result;
};
/**
 * 查询医生详情页信息
 * request: getDetailsInfoUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param req - req
 */
export const getDetailsInfoUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/user/cod/detail/info';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const getDetailsInfoUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/user/cod/detail/info'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const getDetailsInfoUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/user/cod/detail/info';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/user/cod/detail/info',
    queryTType: 'post',
  };
  return result;
};
/**
 * 检查重复申请
 * request: checkUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param req - req
 */
export const checkUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/user/cod/doctor/check';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const checkUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/user/cod/doctor/check'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const checkUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/user/cod/doctor/check';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/user/cod/doctor/check',
    queryTType: 'post',
  };
  return result;
};
/**
 * 全病程首页医生列表
 * request: doctorListUsingPOST
 * @param req - req
 */
export const doctorListUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/user/cod/doctor/list';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const doctorListUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/user/cod/doctor/list'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const doctorListUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/user/cod/doctor/list';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/user/cod/doctor/list',
    queryTType: 'post',
  };
  return result;
};
/**
 * 名医医生列表
 * request: famousDoctorListUsingPOST
 * @param req - req
 */
export const famousDoctorListUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/user/cod/famousDoctor/list';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const famousDoctorListUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/user/cod/famousDoctor/list'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const famousDoctorListUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/user/cod/famousDoctor/list';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/user/cod/famousDoctor/list',
    queryTType: 'post',
  };
  return result;
};
/**
 * 获取全病程管理跳转url地址
 * request: famousDoctorListUsingGET
 * @param accessCode - accessCode
 * @param accessType - accessType
 */
export const famousDoctorListUsingGET = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/user/cod/manage/visit';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['accessCode'] !== undefined) {
    queryParameters['accessCode'] = parameters['accessCode'];
  }
  if (parameters['accessType'] !== undefined) {
    queryParameters['accessType'] = parameters['accessType'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const famousDoctorListUsingGET_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/user/cod/manage/visit'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['accessCode'] !== undefined) {
    queryParameters['accessCode'] = parameters['accessCode'];
  }
  if (parameters['accessType'] !== undefined) {
    queryParameters['accessType'] = parameters['accessType'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const famousDoctorListUsingGETURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/user/cod/manage/visit';
  if (parameters['accessCode'] !== undefined) {
    queryParameters['accessCode'] = parameters['accessCode'];
  }
  if (parameters['accessType'] !== undefined) {
    queryParameters['accessType'] = parameters['accessType'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/user/cod/manage/visit',
    queryTType: 'get',
  };
  return result;
};
/**
 * 删除电子病历信息
 * request: delUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param req - req
 */
export const delUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/user/elecRecord/del';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const delUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/user/elecRecord/del'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const delUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/user/elecRecord/del';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/user/elecRecord/del',
    queryTType: 'post',
  };
  return result;
};
/**
 * 病历夹详情
 * request: detailUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param req - req
 */
export const detailUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/user/elecRecord/detail';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const detailUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/user/elecRecord/detail'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const detailUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/user/elecRecord/detail';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/user/elecRecord/detail',
    queryTType: 'post',
  };
  return result;
};
/**
 * 查询病历夹
 * request: queryUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param req - req
 */
export const queryUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/user/elecRecord/query';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/user/elecRecord/query'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/user/elecRecord/query';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/user/elecRecord/query',
    queryTType: 'post',
  };
  return result;
};
/**
 * 新增电子病历信息
 * request: insertUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param req - req
 */
export const insertUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/user/elecRecord/save';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const insertUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/user/elecRecord/save'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const insertUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/user/elecRecord/save';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/user/elecRecord/save',
    queryTType: 'post',
  };
  return result;
};
/**
 * 修改电子病历信息
 * request: updateUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param req - req
 */
export const updateUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/user/elecRecord/update';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const updateUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/user/elecRecord/update'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const updateUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/user/elecRecord/update';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/user/elecRecord/update',
    queryTType: 'post',
  };
  return result;
};
/**
 * 名医首页医生列表
 * request: myDoctorListUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param req - req
 */
export const myDoctorListUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/user/my/doctor/list';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const myDoctorListUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/user/my/doctor/list'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const myDoctorListUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/user/my/doctor/list';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/user/my/doctor/list',
    queryTType: 'post',
  };
  return result;
};
/**
 * 购药订单支付
 * request: transPayUsingPOST
 * @param req - req
 * @param X-Fast-UserId - X-Fast-UserId
 * @param X-Fast-OpenId - X-Fast-OpenId
 * @param X-Fast-RemoteIp - X-Fast-RemoteIp
 * @param X-Fast-Platform - X-Fast-Platform
 */
export const transPayUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/drugOrder/trans/pay';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const transPayUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/drugOrder/trans/pay'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const transPayUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/drugOrder/trans/pay';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/drugOrder/trans/pay',
    queryTType: 'post',
  };
  return result;
};
/**
 * 购药订单退款
 * request: transRefundUsingPOST
 * @param req - req
 */
export const transRefundUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/drugOrder/trans/refund';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const transRefundUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/drugOrder/trans/refund'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const transRefundUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/drugOrder/trans/refund';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/drugOrder/trans/refund',
    queryTType: 'post',
  };
  return result;
};
/**
 * 问诊订单支付
 * request: enquiryTransPayUsingPOST
 * @param req - req
 * @param X-Fast-UserId - X-Fast-UserId
 * @param X-Fast-OpenId - X-Fast-OpenId
 * @param X-Fast-RemoteIp - X-Fast-RemoteIp
 * @param X-Fast-Platform - X-Fast-Platform
 */
export const enquiryTransPayUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/enquiryOrder/trans/pay';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const enquiryTransPayUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/enquiryOrder/trans/pay'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const enquiryTransPayUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/enquiryOrder/trans/pay';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/enquiryOrder/trans/pay',
    queryTType: 'post',
  };
  return result;
};
/**
 * 问诊订单退款
 * request: enquiryTransRefundUsingPOST
 * @param req - req
 */
export const enquiryTransRefundUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/enquiryOrder/trans/refund';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const enquiryTransRefundUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/enquiryOrder/trans/refund'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const enquiryTransRefundUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/enquiryOrder/trans/refund';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/enquiryOrder/trans/refund',
    queryTType: 'post',
  };
  return result;
};
/**
 * 用户同意 授权隐私协议
 * request: saveOrUpdateHospitalPrivacyUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param project - project
 */
export const saveOrUpdateHospitalPrivacyUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/agreeHospitalPrivacy';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['project'] !== undefined) {
    queryParameters['project'] = parameters['project'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const saveOrUpdateHospitalPrivacyUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/agreeHospitalPrivacy'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['project'] !== undefined) {
    queryParameters['project'] = parameters['project'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const saveOrUpdateHospitalPrivacyUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/agreeHospitalPrivacy';
  if (parameters['project'] !== undefined) {
    queryParameters['project'] = parameters['project'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/agreeHospitalPrivacy',
    queryTType: 'post',
  };
  return result;
};
/**
 * 提交预约,之前接口,是否展示提交预约按钮
 * request: beforeQueryShowUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param req - req
 */
export const beforeQueryShowUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/appointment/before/queryShow';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const beforeQueryShowUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/appointment/before/queryShow'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const beforeQueryShowUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/appointment/before/queryShow';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/appointment/before/queryShow',
    queryTType: 'post',
  };
  return result;
};
/**
 * 取消理赔购药订单
 * request: cancelDrugOrderInfoUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param req - req
 */
export const cancelDrugOrderInfoUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/cancel/claimDrugOrder';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const cancelDrugOrderInfoUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/cancel/claimDrugOrder'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const cancelDrugOrderInfoUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/cancel/claimDrugOrder';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/cancel/claimDrugOrder',
    queryTType: 'post',
  };
  return result;
};
/**
 * 校验就诊人信息是否完整
 * request: checkHospitalPatientUsingGET
 * @param patientId - patientId
 */
export const checkHospitalPatientUsingGET = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/check/patientInfo';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['patientId'] !== undefined) {
    queryParameters['patientId'] = parameters['patientId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const checkHospitalPatientUsingGET_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/check/patientInfo'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['patientId'] !== undefined) {
    queryParameters['patientId'] = parameters['patientId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const checkHospitalPatientUsingGETURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/check/patientInfo';
  if (parameters['patientId'] !== undefined) {
    queryParameters['patientId'] = parameters['patientId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/check/patientInfo',
    queryTType: 'get',
  };
  return result;
};
/**
 * 根据购药订单号查询理赔信息
 * request: queryClaimDataByDrugOrderNoUsingGET
 * @param orderNo - orderNo
 */
export const queryClaimDataByDrugOrderNoUsingGET = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/claimData/queryClaimDataByDrugOrderNo';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['orderNo'] !== undefined) {
    queryParameters['orderNo'] = parameters['orderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const queryClaimDataByDrugOrderNoUsingGET_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/claimData/queryClaimDataByDrugOrderNo'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['orderNo'] !== undefined) {
    queryParameters['orderNo'] = parameters['orderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const queryClaimDataByDrugOrderNoUsingGETURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/claimData/queryClaimDataByDrugOrderNo';
  if (parameters['orderNo'] !== undefined) {
    queryParameters['orderNo'] = parameters['orderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/claimData/queryClaimDataByDrugOrderNo',
    queryTType: 'get',
  };
  return result;
};
/**
 * updateSfWayBillByOrderNo
 * request: updateSfWayBillByOrderNoUsingPOST
 * @param wayBillReq - wayBillReq
 */
export const updateSfWayBillByOrderNoUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/claimData/updateSfWayBillByOrderNo';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['wayBillReq'] !== undefined) {
    body = parameters['wayBillReq'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const updateSfWayBillByOrderNoUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/claimData/updateSfWayBillByOrderNo'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['wayBillReq'] !== undefined) {
    body = parameters['wayBillReq'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const updateSfWayBillByOrderNoUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/claimData/updateSfWayBillByOrderNo';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/claimData/updateSfWayBillByOrderNo',
    queryTType: 'post',
  };
  return result;
};
/**
 * updateWayBillByOrderNo
 * request: updateWayBillByOrderNoUsingPOST
 * @param wayBillReq - wayBillReq
 */
export const updateWayBillByOrderNoUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/claimData/updateWayBillByOrderNo';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['wayBillReq'] !== undefined) {
    body = parameters['wayBillReq'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const updateWayBillByOrderNoUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/claimData/updateWayBillByOrderNo'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['wayBillReq'] !== undefined) {
    body = parameters['wayBillReq'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const updateWayBillByOrderNoUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/claimData/updateWayBillByOrderNo';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/claimData/updateWayBillByOrderNo',
    queryTType: 'post',
  };
  return result;
};
/**
 * addDrugBatch
 * request: addDrugBatchUsingPOST
 * @param req - req
 */
export const addDrugBatchUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/claimOrder/addDrugBatch';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const addDrugBatchUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/claimOrder/addDrugBatch'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const addDrugBatchUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/claimOrder/addDrugBatch';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/claimOrder/addDrugBatch',
    queryTType: 'post',
  };
  return result;
};
/**
 * addPaymentAccount
 * request: addPaymentAccountUsingPOST
 * @param drugOrderNo - drugOrderNo
 * @param paymentAccount - paymentAccount
 */
export const addPaymentAccountUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/claimOrder/addPaymentAccount';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['drugOrderNo'] !== undefined) {
    queryParameters['drugOrderNo'] = parameters['drugOrderNo'];
  }
  if (parameters['paymentAccount'] !== undefined) {
    queryParameters['paymentAccount'] = parameters['paymentAccount'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const addPaymentAccountUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/claimOrder/addPaymentAccount'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['drugOrderNo'] !== undefined) {
    queryParameters['drugOrderNo'] = parameters['drugOrderNo'];
  }
  if (parameters['paymentAccount'] !== undefined) {
    queryParameters['paymentAccount'] = parameters['paymentAccount'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const addPaymentAccountUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/claimOrder/addPaymentAccount';
  if (parameters['drugOrderNo'] !== undefined) {
    queryParameters['drugOrderNo'] = parameters['drugOrderNo'];
  }
  if (parameters['paymentAccount'] !== undefined) {
    queryParameters['paymentAccount'] = parameters['paymentAccount'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/claimOrder/addPaymentAccount',
    queryTType: 'post',
  };
  return result;
};
/**
 * confirmWriteOff
 * request: confirmWriteOffUsingPOST
 * @param writeOffInfoReq - writeOffInfoReq
 */
export const confirmWriteOffUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/claimOrder/confirmWriteOff';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['writeOffInfoReq'] !== undefined) {
    body = parameters['writeOffInfoReq'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const confirmWriteOffUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/claimOrder/confirmWriteOff'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['writeOffInfoReq'] !== undefined) {
    body = parameters['writeOffInfoReq'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const confirmWriteOffUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/claimOrder/confirmWriteOff';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/claimOrder/confirmWriteOff',
    queryTType: 'post',
  };
  return result;
};
/**
 * drugBatchList
 * request: drugBatchListUsingPOST
 * @param req - req
 */
export const drugBatchListUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/claimOrder/drugBatchList';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const drugBatchListUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/claimOrder/drugBatchList'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const drugBatchListUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/claimOrder/drugBatchList';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/claimOrder/drugBatchList',
    queryTType: 'post',
  };
  return result;
};
/**
 * editDrugBatch
 * request: editDrugBatchUsingPOST
 * @param req - req
 */
export const editDrugBatchUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/claimOrder/editDrugBatch';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const editDrugBatchUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/claimOrder/editDrugBatch'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const editDrugBatchUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/claimOrder/editDrugBatch';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/claimOrder/editDrugBatch',
    queryTType: 'post',
  };
  return result;
};
/**
 * list
 * request: listUsingPOST
 * @param req - req
 */
export const listUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/claimOrder/list';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const listUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/claimOrder/list'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const listUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/claimOrder/list';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/claimOrder/list',
    queryTType: 'post',
  };
  return result;
};
/**
 * queryWriteOff
 * request: queryWriteOffUsingPOST
 * @param drugOrderNo - drugOrderNo
 */
export const queryWriteOffUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/claimOrder/queryWriteOff';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['drugOrderNo'] !== undefined) {
    queryParameters['drugOrderNo'] = parameters['drugOrderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryWriteOffUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/claimOrder/queryWriteOff'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['drugOrderNo'] !== undefined) {
    queryParameters['drugOrderNo'] = parameters['drugOrderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryWriteOffUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/claimOrder/queryWriteOff';
  if (parameters['drugOrderNo'] !== undefined) {
    queryParameters['drugOrderNo'] = parameters['drugOrderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/claimOrder/queryWriteOff',
    queryTType: 'post',
  };
  return result;
};
/**
 * searchType
 * request: searchTypeUsingPOST
 * @param req - req
 */
export const searchTypeUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/claimOrder/searchType';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const searchTypeUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/claimOrder/searchType'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const searchTypeUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/claimOrder/searchType';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/claimOrder/searchType',
    queryTType: 'post',
  };
  return result;
};
/**
 * 获取全病程token,进行im聊天
 * request: getXyTokenUsingGET
 * @param X-Fast-UserId - X-Fast-UserId
 * @param doctorId - doctorId
 */
export const getXyTokenUsingGET = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/cod/getCodCaseToken';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['doctorId'] !== undefined) {
    queryParameters['doctorId'] = parameters['doctorId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const getXyTokenUsingGET_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/cod/getCodCaseToken'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['doctorId'] !== undefined) {
    queryParameters['doctorId'] = parameters['doctorId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const getXyTokenUsingGETURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/cod/getCodCaseToken';
  if (parameters['doctorId'] !== undefined) {
    queryParameters['doctorId'] = parameters['doctorId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/cod/getCodCaseToken',
    queryTType: 'get',
  };
  return result;
};
/**
 * 查询/切换 当前就诊人
 * request: switchCurrentPatientUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param req - req
 */
export const switchCurrentPatientUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/cod/switchCurrentPatient';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const switchCurrentPatientUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/cod/switchCurrentPatient'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const switchCurrentPatientUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/cod/switchCurrentPatient';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/cod/switchCurrentPatient',
    queryTType: 'post',
  };
  return result;
};
/**
 * 收藏医生
 * request: saveDoctorCollectionUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param req - req
 */
export const saveDoctorCollectionUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/collect/collectionDoctor';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const saveDoctorCollectionUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/collect/collectionDoctor'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const saveDoctorCollectionUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/collect/collectionDoctor';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/collect/collectionDoctor',
    queryTType: 'post',
  };
  return result;
};
/**
 * 分页查询用户 服务医生/收藏医生 列表
 * request: pageDoctorCollectionListUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param req - req
 */
export const pageDoctorCollectionListUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/collect/pageDoctorCollectList';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const pageDoctorCollectionListUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/collect/pageDoctorCollectList'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const pageDoctorCollectionListUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/collect/pageDoctorCollectList';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/collect/pageDoctorCollectList',
    queryTType: 'post',
  };
  return result;
};
/**
 * 重新计算价格
 * request: calculateCouponsUsingPOST
 * @param req - req
 */
export const calculateCouponsUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/coupons/calculate';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const calculateCouponsUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/coupons/calculate'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const calculateCouponsUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/coupons/calculate';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/coupons/calculate',
    queryTType: 'post',
  };
  return result;
};
/**
 * 查询用户优惠券列表
 * request: queryUserCouponsListUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param req - req
 */
export const queryUserCouponsListUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/coupons/queryList';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryUserCouponsListUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/coupons/queryList'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryUserCouponsListUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/coupons/queryList';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/coupons/queryList',
    queryTType: 'post',
  };
  return result;
};
/**
 * 创建导诊订单
 * request: createGuiderOrderUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param req - req
 */
export const createGuiderOrderUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/create/guider/order';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const createGuiderOrderUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/create/guider/order'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const createGuiderOrderUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/create/guider/order';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/create/guider/order',
    queryTType: 'post',
  };
  return result;
};
/**
 * 提交预约,立即购买按钮(门急诊,商城)
 * request: createOutPatientOrderUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param req - req
 */
export const createOutPatientOrderUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/createBuyNowSubmitOrder';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const createOutPatientOrderUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/createBuyNowSubmitOrder'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const createOutPatientOrderUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/createBuyNowSubmitOrder';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/createBuyNowSubmitOrder',
    queryTType: 'post',
  };
  return result;
};
/**
 * 查询医生列表
 * request: queryDoctorListUsingPOST
 * @param req - req
 */
export const queryDoctorListUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/doctor/queryList';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryDoctorListUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/doctor/queryList'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryDoctorListUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/doctor/queryList';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/doctor/queryList',
    queryTType: 'post',
  };
  return result;
};
/**
 * 查看服务包订单列表
 * request: pageListUsingPOST
 * @param req - req
 */
export const pageListUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/equity/queryPage';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const pageListUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/equity/queryPage'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const pageListUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/equity/queryPage';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/equity/queryPage',
    queryTType: 'post',
  };
  return result;
};
/**
 * 根据Id逻辑删除文件数据信息
 * request: deleteByIdUsingGET
 * @param id - id
 * @param X-Fast-UserId - X-Fast-UserId
 */
export const deleteByIdUsingGET = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/file/delete';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const deleteByIdUsingGET_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/file/delete'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const deleteByIdUsingGETURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/file/delete';
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/file/delete',
    queryTType: 'get',
  };
  return result;
};
/**
 * 根据Id查询文件数据信息
 * request: queryByIdUsingGET
 * @param id - id
 */
export const queryByIdUsingGET = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/file/query';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const queryByIdUsingGET_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/file/query'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const queryByIdUsingGETURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/file/query';
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/file/query',
    queryTType: 'get',
  };
  return result;
};
/**
 * 当前用户上传文件数据
 * request: uploadFilesUsingPOST
 * @param file - file
 * @param orderNo - orderNo
 * @param fieldName - fieldName
 * @param isPublic - isPublic
 * @param X-Fast-UserId - X-Fast-UserId
 * @param X-Fast-Channel - X-Fast-Channel
 */
export const uploadFilesUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/file/upload/files';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['file'] !== undefined) {
    queryParameters['file'] = parameters['file'];
  }
  if (parameters['orderNo'] !== undefined) {
    queryParameters['orderNo'] = parameters['orderNo'];
  }
  if (parameters['fieldName'] !== undefined) {
    queryParameters['fieldName'] = parameters['fieldName'];
  }
  if (parameters['isPublic'] !== undefined) {
    queryParameters['isPublic'] = parameters['isPublic'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const uploadFilesUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/file/upload/files'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['file'] !== undefined) {
    queryParameters['file'] = parameters['file'];
  }
  if (parameters['orderNo'] !== undefined) {
    queryParameters['orderNo'] = parameters['orderNo'];
  }
  if (parameters['fieldName'] !== undefined) {
    queryParameters['fieldName'] = parameters['fieldName'];
  }
  if (parameters['isPublic'] !== undefined) {
    queryParameters['isPublic'] = parameters['isPublic'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const uploadFilesUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/file/upload/files';
  if (parameters['file'] !== undefined) {
    queryParameters['file'] = parameters['file'];
  }
  if (parameters['orderNo'] !== undefined) {
    queryParameters['orderNo'] = parameters['orderNo'];
  }
  if (parameters['fieldName'] !== undefined) {
    queryParameters['fieldName'] = parameters['fieldName'];
  }
  if (parameters['isPublic'] !== undefined) {
    queryParameters['isPublic'] = parameters['isPublic'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/file/upload/files',
    queryTType: 'post',
  };
  return result;
};
/**
 * 根据身份证号填充就诊人信息
 * request: fillPatientUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param req - req
 */
export const fillPatientUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/fillPatient';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const fillPatientUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/fillPatient'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const fillPatientUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/fillPatient';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/fillPatient',
    queryTType: 'post',
  };
  return result;
};
/**
 * 医生端调用创建转诊订单
 * request: createReferralHospitalOrderForHnUsingGET
 * @param req - req
 */
export const createReferralHospitalOrderForHnUsingGET = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/forHn/createReferralOrder';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const createReferralHospitalOrderForHnUsingGET_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/forHn/createReferralOrder'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const createReferralHospitalOrderForHnUsingGETURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/forHn/createReferralOrder';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/forHn/createReferralOrder',
    queryTType: 'get',
  };
  return result;
};
/**
 * 医生端调用创建转诊订单
 * request: createReferralHospitalOrderForHnUsingHEAD
 * @param req - req
 */
export const createReferralHospitalOrderForHnUsingHEAD = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/forHn/createReferralOrder';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('head', domain + path, body, queryParameters, form, config);
};
export const createReferralHospitalOrderForHnUsingHEAD_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/forHn/createReferralOrder'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('head', domain + path, body, queryParameters, form, config);
};
export const createReferralHospitalOrderForHnUsingHEADURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/forHn/createReferralOrder';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/forHn/createReferralOrder',
    queryTType: 'head',
  };
  return result;
};
/**
 * 医生端调用创建转诊订单
 * request: createReferralHospitalOrderForHnUsingPOST
 * @param req - req
 */
export const createReferralHospitalOrderForHnUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/forHn/createReferralOrder';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const createReferralHospitalOrderForHnUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/forHn/createReferralOrder'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const createReferralHospitalOrderForHnUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/forHn/createReferralOrder';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/forHn/createReferralOrder',
    queryTType: 'post',
  };
  return result;
};
/**
 * 医生端调用创建转诊订单
 * request: createReferralHospitalOrderForHnUsingPUT
 * @param req - req
 */
export const createReferralHospitalOrderForHnUsingPUT = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/forHn/createReferralOrder';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('put', domain + path, body, queryParameters, form, config);
};
export const createReferralHospitalOrderForHnUsingPUT_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/forHn/createReferralOrder'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('put', domain + path, body, queryParameters, form, config);
};
export const createReferralHospitalOrderForHnUsingPUTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/forHn/createReferralOrder';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/forHn/createReferralOrder',
    queryTType: 'put',
  };
  return result;
};
/**
 * 医生端调用创建转诊订单
 * request: createReferralHospitalOrderForHnUsingDELETE
 * @param req - req
 */
export const createReferralHospitalOrderForHnUsingDELETE = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/forHn/createReferralOrder';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config);
};
export const createReferralHospitalOrderForHnUsingDELETE_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/forHn/createReferralOrder'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config);
};
export const createReferralHospitalOrderForHnUsingDELETEURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/forHn/createReferralOrder';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/forHn/createReferralOrder',
    queryTType: 'delete',
  };
  return result;
};
/**
 * 医生端调用创建转诊订单
 * request: createReferralHospitalOrderForHnUsingOPTIONS
 * @param req - req
 */
export const createReferralHospitalOrderForHnUsingOPTIONS = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/forHn/createReferralOrder';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('options', domain + path, body, queryParameters, form, config);
};
export const createReferralHospitalOrderForHnUsingOPTIONS_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/forHn/createReferralOrder'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('options', domain + path, body, queryParameters, form, config);
};
export const createReferralHospitalOrderForHnUsingOPTIONSURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/forHn/createReferralOrder';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/forHn/createReferralOrder',
    queryTType: 'options',
  };
  return result;
};
/**
 * 医生端调用创建转诊订单
 * request: createReferralHospitalOrderForHnUsingPATCH
 * @param req - req
 */
export const createReferralHospitalOrderForHnUsingPATCH = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/forHn/createReferralOrder';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('patch', domain + path, body, queryParameters, form, config);
};
export const createReferralHospitalOrderForHnUsingPATCH_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/forHn/createReferralOrder'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('patch', domain + path, body, queryParameters, form, config);
};
export const createReferralHospitalOrderForHnUsingPATCHURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/forHn/createReferralOrder';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/forHn/createReferralOrder',
    queryTType: 'patch',
  };
  return result;
};
/**
 * 查询进行中的订单
 * request: queryProcessOrderUsingGET
 * @param userId - userId
 */
export const queryProcessOrderUsingGET = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/get/process/order';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['userId'] !== undefined) {
    queryParameters['userId'] = parameters['userId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const queryProcessOrderUsingGET_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/get/process/order'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['userId'] !== undefined) {
    queryParameters['userId'] = parameters['userId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const queryProcessOrderUsingGETURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/get/process/order';
  if (parameters['userId'] !== undefined) {
    queryParameters['userId'] = parameters['userId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/get/process/order',
    queryTType: 'get',
  };
  return result;
};
/**
 * 推送开发票
 * request: invoiceUsingPOST
 * @param drugOrderNo - drugOrderNo
 */
export const invoiceUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/gold/invoice';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['drugOrderNo'] !== undefined) {
    queryParameters['drugOrderNo'] = parameters['drugOrderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const invoiceUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/gold/invoice'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['drugOrderNo'] !== undefined) {
    queryParameters['drugOrderNo'] = parameters['drugOrderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const invoiceUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/gold/invoice';
  if (parameters['drugOrderNo'] !== undefined) {
    queryParameters['drugOrderNo'] = parameters['drugOrderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/gold/invoice',
    queryTType: 'post',
  };
  return result;
};
/**
 * 提交量表测试结果
 * request: addCheckRecordUsingGET
 * @param X-Fast-UserId - X-Fast-UserId
 * @param gaugeNumber - gaugeNumber
 * @param chooseResult - chooseResult
 */
export const addCheckRecordUsingGET = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/guage/addCheckRecord';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['gaugeNumber'] !== undefined) {
    queryParameters['gaugeNumber'] = parameters['gaugeNumber'];
  }
  if (parameters['chooseResult'] !== undefined) {
    queryParameters['chooseResult'] = parameters['chooseResult'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const addCheckRecordUsingGET_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/guage/addCheckRecord'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['gaugeNumber'] !== undefined) {
    queryParameters['gaugeNumber'] = parameters['gaugeNumber'];
  }
  if (parameters['chooseResult'] !== undefined) {
    queryParameters['chooseResult'] = parameters['chooseResult'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const addCheckRecordUsingGETURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/guage/addCheckRecord';
  if (parameters['gaugeNumber'] !== undefined) {
    queryParameters['gaugeNumber'] = parameters['gaugeNumber'];
  }
  if (parameters['chooseResult'] !== undefined) {
    queryParameters['chooseResult'] = parameters['chooseResult'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/guage/addCheckRecord',
    queryTType: 'get',
  };
  return result;
};
/**
 * 根据量表类型获取量表列表
 * request: getGaugeListUsingGET
 * @param gaugeType - gaugeType
 */
export const getGaugeListUsingGET = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/guage/getGaugeListByType';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['gaugeType'] !== undefined) {
    queryParameters['gaugeType'] = parameters['gaugeType'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const getGaugeListUsingGET_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/guage/getGaugeListByType'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['gaugeType'] !== undefined) {
    queryParameters['gaugeType'] = parameters['gaugeType'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const getGaugeListUsingGETURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/guage/getGaugeListByType';
  if (parameters['gaugeType'] !== undefined) {
    queryParameters['gaugeType'] = parameters['gaugeType'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/guage/getGaugeListByType',
    queryTType: 'get',
  };
  return result;
};
/**
 * 根据量表编号获取题目列表
 * request: getQuestionListUsingGET
 * @param gaugeNumber - gaugeNumber
 */
export const getQuestionListUsingGET = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/guage/getQuestionList';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['gaugeNumber'] !== undefined) {
    queryParameters['gaugeNumber'] = parameters['gaugeNumber'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const getQuestionListUsingGET_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/guage/getQuestionList'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['gaugeNumber'] !== undefined) {
    queryParameters['gaugeNumber'] = parameters['gaugeNumber'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const getQuestionListUsingGETURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/guage/getQuestionList';
  if (parameters['gaugeNumber'] !== undefined) {
    queryParameters['gaugeNumber'] = parameters['gaugeNumber'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/guage/getQuestionList',
    queryTType: 'get',
  };
  return result;
};
/**
 * 更新导诊订单的处方和病历文件信息
 * request: updateFileDataUsingPOST
 * @param req - req
 */
export const updateFileDataUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/guider/updateFileData';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const updateFileDataUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/guider/updateFileData'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const updateFileDataUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/guider/updateFileData';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/guider/updateFileData',
    queryTType: 'post',
  };
  return result;
};
/**
 * queryHouseholdData
 * request: queryHouseholdDataUsingGET
 * @param houseId - houseId
 */
export const queryHouseholdDataUsingGET = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/household/query';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['houseId'] !== undefined) {
    queryParameters['houseId'] = parameters['houseId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const queryHouseholdDataUsingGET_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/household/query'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['houseId'] !== undefined) {
    queryParameters['houseId'] = parameters['houseId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const queryHouseholdDataUsingGETURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/household/query';
  if (parameters['houseId'] !== undefined) {
    queryParameters['houseId'] = parameters['houseId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/household/query',
    queryTType: 'get',
  };
  return result;
};
/**
 * 华氏药品信息判断
 * request: judgeHsDrugInfoUsingPOST
 * @param outOrderNo - outOrderNo
 */
export const judgeHsDrugInfoUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/hs/judgeHsDrugInfo';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['outOrderNo'] !== undefined) {
    queryParameters['outOrderNo'] = parameters['outOrderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const judgeHsDrugInfoUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/hs/judgeHsDrugInfo'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['outOrderNo'] !== undefined) {
    queryParameters['outOrderNo'] = parameters['outOrderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const judgeHsDrugInfoUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/hs/judgeHsDrugInfo';
  if (parameters['outOrderNo'] !== undefined) {
    queryParameters['outOrderNo'] = parameters['outOrderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/hs/judgeHsDrugInfo',
    queryTType: 'post',
  };
  return result;
};
/**
 * 华氏药品信息查询
 * request: queryHsDrugInfoUsingPOST
 * @param outOrderNo - outOrderNo
 */
export const queryHsDrugInfoUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/hs/queryHsDrugInfo';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['outOrderNo'] !== undefined) {
    queryParameters['outOrderNo'] = parameters['outOrderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryHsDrugInfoUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/hs/queryHsDrugInfo'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['outOrderNo'] !== undefined) {
    queryParameters['outOrderNo'] = parameters['outOrderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryHsDrugInfoUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/hs/queryHsDrugInfo';
  if (parameters['outOrderNo'] !== undefined) {
    queryParameters['outOrderNo'] = parameters['outOrderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/hs/queryHsDrugInfo',
    queryTType: 'post',
  };
  return result;
};
/**
 * 患者端查询userSing
 * request: queryUserSignUsingPOST
 * @param imUserSignReq - imUserSignReq
 */
export const queryUserSignUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/im/queryUserSign';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['imUserSignReq'] !== undefined) {
    body = parameters['imUserSignReq'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryUserSignUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/im/queryUserSign'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['imUserSignReq'] !== undefined) {
    body = parameters['imUserSignReq'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryUserSignUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/im/queryUserSign';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/im/queryUserSign',
    queryTType: 'post',
  };
  return result;
};
/**
 * 病历卡信息
 * request: queryMedicalUsingGET
 * @param orderNo - orderNo
 */
export const queryMedicalUsingGET = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/medical/{orderNo}';
  let body;
  let queryParameters = {};
  let form = {};
  path = path.replace('{orderNo}', `${parameters['orderNo']}`);
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const queryMedicalUsingGET_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/medical/{orderNo}'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  path = path.replace('{orderNo}', `${parameters['orderNo']}`);
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const queryMedicalUsingGETURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/medical/{orderNo}';
  path = path.replace('{orderNo}', `${parameters['orderNo']}`);
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/medical/{orderNo}',
    queryTType: 'get',
  };
  return result;
};
/**
 * 修改就诊人信息
 * request: modifyHospitalPatientUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param req - req
 */
export const modifyHospitalPatientUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/modifyHospitalPatient';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const modifyHospitalPatientUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/modifyHospitalPatient'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const modifyHospitalPatientUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/modifyHospitalPatient';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/modifyHospitalPatient',
    queryTType: 'post',
  };
  return result;
};
/**
 * 关注医生
 * request: attentionDoctorUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param attentionDoctorReq - attentionDoctorReq
 */
export const attentionDoctorUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/mth/attentionDoctor';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['attentionDoctorReq'] !== undefined) {
    body = parameters['attentionDoctorReq'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const attentionDoctorUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/mth/attentionDoctor'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['attentionDoctorReq'] !== undefined) {
    body = parameters['attentionDoctorReq'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const attentionDoctorUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/mth/attentionDoctor';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/mth/attentionDoctor',
    queryTType: 'post',
  };
  return result;
};
/**
 * 绑定医生
 * request: bindDoctorUsingPOST
 * @param file - file
 * @param X-Fast-UserId - X-Fast-UserId
 * @param patientId - patientId
 * @param doctorId - doctorId
 * @param disease - disease
 */
export const bindDoctorUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/mth/bindDoctor';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['file'] !== undefined) {
    queryParameters['file'] = parameters['file'];
  }
  if (parameters['patientId'] !== undefined) {
    queryParameters['patientId'] = parameters['patientId'];
  }
  if (parameters['doctorId'] !== undefined) {
    queryParameters['doctorId'] = parameters['doctorId'];
  }
  if (parameters['disease'] !== undefined) {
    queryParameters['disease'] = parameters['disease'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const bindDoctorUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/mth/bindDoctor'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['file'] !== undefined) {
    queryParameters['file'] = parameters['file'];
  }
  if (parameters['patientId'] !== undefined) {
    queryParameters['patientId'] = parameters['patientId'];
  }
  if (parameters['doctorId'] !== undefined) {
    queryParameters['doctorId'] = parameters['doctorId'];
  }
  if (parameters['disease'] !== undefined) {
    queryParameters['disease'] = parameters['disease'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const bindDoctorUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/mth/bindDoctor';
  if (parameters['file'] !== undefined) {
    queryParameters['file'] = parameters['file'];
  }
  if (parameters['patientId'] !== undefined) {
    queryParameters['patientId'] = parameters['patientId'];
  }
  if (parameters['doctorId'] !== undefined) {
    queryParameters['doctorId'] = parameters['doctorId'];
  }
  if (parameters['disease'] !== undefined) {
    queryParameters['disease'] = parameters['disease'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/mth/bindDoctor',
    queryTType: 'post',
  };
  return result;
};
/**
 * 转化处方笺pdf与img
 * request: queryPdfImageUsingPOST
 * @param req - req
 */
export const queryPdfImageUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/mth/convertPdfImg';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryPdfImageUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/mth/convertPdfImg'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryPdfImageUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/mth/convertPdfImg';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/mth/convertPdfImg',
    queryTType: 'post',
  };
  return result;
};
/**
 * 添加评论
 * request: evaluateSaveUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param evaluateSaveReq - evaluateSaveReq
 */
export const evaluateSaveUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/mth/evaluateSave';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['evaluateSaveReq'] !== undefined) {
    body = parameters['evaluateSaveReq'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const evaluateSaveUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/mth/evaluateSave'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['evaluateSaveReq'] !== undefined) {
    body = parameters['evaluateSaveReq'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const evaluateSaveUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/mth/evaluateSave';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/mth/evaluateSave',
    queryTType: 'post',
  };
  return result;
};
/**
 * 关注医生列表
 * request: getAttentionDoctorUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param ownDoctorReq - ownDoctorReq
 */
export const getAttentionDoctorUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/mth/getAttentionDoctor';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['ownDoctorReq'] !== undefined) {
    body = parameters['ownDoctorReq'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const getAttentionDoctorUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/mth/getAttentionDoctor'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['ownDoctorReq'] !== undefined) {
    body = parameters['ownDoctorReq'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const getAttentionDoctorUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/mth/getAttentionDoctor';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/mth/getAttentionDoctor',
    queryTType: 'post',
  };
  return result;
};
/**
 * 咨询服务医生列表
 * request: getConsultDoctorUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param popularDoctorReq - popularDoctorReq
 */
export const getConsultDoctorUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/mth/getConsultDoctor';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['popularDoctorReq'] !== undefined) {
    body = parameters['popularDoctorReq'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const getConsultDoctorUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/mth/getConsultDoctor'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['popularDoctorReq'] !== undefined) {
    body = parameters['popularDoctorReq'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const getConsultDoctorUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/mth/getConsultDoctor';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/mth/getConsultDoctor',
    queryTType: 'post',
  };
  return result;
};
/**
 * 医生接诊开方时间
 * request: getDoctorTimeUsingGET
 * @param X-Fast-UserId - X-Fast-UserId
 * @param claimOrderNo - claimOrderNo
 */
export const getDoctorTimeUsingGET = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/mth/getDoctorTime';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['claimOrderNo'] !== undefined) {
    queryParameters['claimOrderNo'] = parameters['claimOrderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const getDoctorTimeUsingGET_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/mth/getDoctorTime'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['claimOrderNo'] !== undefined) {
    queryParameters['claimOrderNo'] = parameters['claimOrderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const getDoctorTimeUsingGETURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/mth/getDoctorTime';
  if (parameters['claimOrderNo'] !== undefined) {
    queryParameters['claimOrderNo'] = parameters['claimOrderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/mth/getDoctorTime',
    queryTType: 'get',
  };
  return result;
};
/**
 * 我的医生
 * request: getOwnDoctorUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param ownDoctorReq - ownDoctorReq
 */
export const getOwnDoctorUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/mth/getOwnDoctor';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['ownDoctorReq'] !== undefined) {
    body = parameters['ownDoctorReq'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const getOwnDoctorUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/mth/getOwnDoctor'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['ownDoctorReq'] !== undefined) {
    body = parameters['ownDoctorReq'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const getOwnDoctorUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/mth/getOwnDoctor';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/mth/getOwnDoctor',
    queryTType: 'post',
  };
  return result;
};
/**
 * 热门医生
 * request: getPopularDoctorUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param popularDoctorReq - popularDoctorReq
 */
export const getPopularDoctorUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/mth/getPopularDoctor';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['popularDoctorReq'] !== undefined) {
    body = parameters['popularDoctorReq'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const getPopularDoctorUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/mth/getPopularDoctor'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['popularDoctorReq'] !== undefined) {
    body = parameters['popularDoctorReq'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const getPopularDoctorUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/mth/getPopularDoctor';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/mth/getPopularDoctor',
    queryTType: 'post',
  };
  return result;
};
/**
 * 服务信息
 * request: getServiceInfoUsingGET
 * @param X-Fast-UserId - X-Fast-UserId
 * @param doctorId - doctorId
 */
export const getServiceInfoUsingGET = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/mth/getServiceInfo';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['doctorId'] !== undefined) {
    queryParameters['doctorId'] = parameters['doctorId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const getServiceInfoUsingGET_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/mth/getServiceInfo'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['doctorId'] !== undefined) {
    queryParameters['doctorId'] = parameters['doctorId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const getServiceInfoUsingGETURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/mth/getServiceInfo';
  if (parameters['doctorId'] !== undefined) {
    queryParameters['doctorId'] = parameters['doctorId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/mth/getServiceInfo',
    queryTType: 'get',
  };
  return result;
};
/**
 * 获取心医token
 * request: getXyTokenUsingGET_1
 * @param X-Fast-UserId - X-Fast-UserId
 */
export const getXyTokenUsingGET_1 = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/mth/getToken';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const getXyTokenUsingGET_1_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/mth/getToken'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const getXyTokenUsingGET_1URL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/mth/getToken';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/mth/getToken',
    queryTType: 'get',
  };
  return result;
};
/**
 * 查询所有科室列表
 * request: getXyDepartmentUsingGET
 * @param X-Fast-UserId - X-Fast-UserId
 */
export const getXyDepartmentUsingGET = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/mth/getXyDepartment';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const getXyDepartmentUsingGET_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/mth/getXyDepartment'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const getXyDepartmentUsingGETURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/mth/getXyDepartment';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/mth/getXyDepartment',
    queryTType: 'get',
  };
  return result;
};
/**
 * 医生详情
 * request: queryXyDoctorInfoUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param req - req
 */
export const queryXyDoctorInfoUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/mth/getXyDoctorInfo';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryXyDoctorInfoUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/mth/getXyDoctorInfo'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryXyDoctorInfoUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/mth/getXyDoctorInfo';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/mth/getXyDoctorInfo',
    queryTType: 'post',
  };
  return result;
};
/**
 * 分页查询订单列表
 * request: getXyOrdersUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param mthOrderPageReq - mthOrderPageReq
 */
export const getXyOrdersUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/mth/getXyOrders';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['mthOrderPageReq'] !== undefined) {
    body = parameters['mthOrderPageReq'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const getXyOrdersUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/mth/getXyOrders'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['mthOrderPageReq'] !== undefined) {
    body = parameters['mthOrderPageReq'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const getXyOrdersUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/mth/getXyOrders';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/mth/getXyOrders',
    queryTType: 'post',
  };
  return result;
};
/**
 * 推送患者首次回复
 * request: pushPatientReplyUsingGET
 * @param X-Fast-UserId - X-Fast-UserId
 * @param orderNo - orderNo
 */
export const pushPatientReplyUsingGET = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/mth/pushPatientReply';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['orderNo'] !== undefined) {
    queryParameters['orderNo'] = parameters['orderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const pushPatientReplyUsingGET_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/mth/pushPatientReply'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['orderNo'] !== undefined) {
    queryParameters['orderNo'] = parameters['orderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const pushPatientReplyUsingGETURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/mth/pushPatientReply';
  if (parameters['orderNo'] !== undefined) {
    queryParameters['orderNo'] = parameters['orderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/mth/pushPatientReply',
    queryTType: 'get',
  };
  return result;
};
/**
 * 获取处方列表
 * request: queryPrescriptionUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param req - req
 */
export const queryPrescriptionUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/mth/queryPrescription';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryPrescriptionUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/mth/queryPrescription'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryPrescriptionUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/mth/queryPrescription';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/mth/queryPrescription',
    queryTType: 'post',
  };
  return result;
};
/**
 * 更新处方图片有效
 * request: updatePrescriptionUrlsUsingPOST
 * @param startDate - startDate
 * @param endDate - endDate
 * @param orderNo - orderNo
 * @param phoneNo - phoneNo
 */
export const updatePrescriptionUrlsUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/mth/updatePrescriptionUrls';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['startDate'] !== undefined) {
    queryParameters['startDate'] = parameters['startDate'];
  }
  if (parameters['endDate'] !== undefined) {
    queryParameters['endDate'] = parameters['endDate'];
  }
  if (parameters['orderNo'] !== undefined) {
    queryParameters['orderNo'] = parameters['orderNo'];
  }
  if (parameters['phoneNo'] !== undefined) {
    queryParameters['phoneNo'] = parameters['phoneNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const updatePrescriptionUrlsUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/mth/updatePrescriptionUrls'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['startDate'] !== undefined) {
    queryParameters['startDate'] = parameters['startDate'];
  }
  if (parameters['endDate'] !== undefined) {
    queryParameters['endDate'] = parameters['endDate'];
  }
  if (parameters['orderNo'] !== undefined) {
    queryParameters['orderNo'] = parameters['orderNo'];
  }
  if (parameters['phoneNo'] !== undefined) {
    queryParameters['phoneNo'] = parameters['phoneNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const updatePrescriptionUrlsUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/mth/updatePrescriptionUrls';
  if (parameters['startDate'] !== undefined) {
    queryParameters['startDate'] = parameters['startDate'];
  }
  if (parameters['endDate'] !== undefined) {
    queryParameters['endDate'] = parameters['endDate'];
  }
  if (parameters['orderNo'] !== undefined) {
    queryParameters['orderNo'] = parameters['orderNo'];
  }
  if (parameters['phoneNo'] !== undefined) {
    queryParameters['phoneNo'] = parameters['phoneNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/mth/updatePrescriptionUrls',
    queryTType: 'post',
  };
  return result;
};
/**
 * 邮件下载文件
 * request: uploadByEmailUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param uploadByEmailReq - uploadByEmailReq
 */
export const uploadByEmailUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/mth/uploadByEmail';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['uploadByEmailReq'] !== undefined) {
    body = parameters['uploadByEmailReq'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const uploadByEmailUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/mth/uploadByEmail'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['uploadByEmailReq'] !== undefined) {
    body = parameters['uploadByEmailReq'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const uploadByEmailUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/mth/uploadByEmail';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/mth/uploadByEmail',
    queryTType: 'post',
  };
  return result;
};
/**
 * 患者取消订单
 * request: cancelOrderUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param orderNo - orderNo
 * @param reason - reason
 */
export const cancelOrderUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/order/cancel';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['orderNo'] !== undefined) {
    queryParameters['orderNo'] = parameters['orderNo'];
  }
  if (parameters['reason'] !== undefined) {
    queryParameters['reason'] = parameters['reason'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const cancelOrderUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/order/cancel'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['orderNo'] !== undefined) {
    queryParameters['orderNo'] = parameters['orderNo'];
  }
  if (parameters['reason'] !== undefined) {
    queryParameters['reason'] = parameters['reason'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const cancelOrderUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/order/cancel';
  if (parameters['orderNo'] !== undefined) {
    queryParameters['orderNo'] = parameters['orderNo'];
  }
  if (parameters['reason'] !== undefined) {
    queryParameters['reason'] = parameters['reason'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/order/cancel',
    queryTType: 'post',
  };
  return result;
};
/**
 * 获取订单状态
 * request: getOrderStatusUsingPOST
 * @param req - req
 */
export const getOrderStatusUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/order/getOrderStatus';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const getOrderStatusUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/order/getOrderStatus'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const getOrderStatusUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/order/getOrderStatus';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/order/getOrderStatus',
    queryTType: 'post',
  };
  return result;
};
/**
 * 查看诊记录
 * request: pageListUsingPOST_1
 * @param X-Fast-UserId - X-Fast-UserId
 * @param req - req
 */
export const pageListUsingPOST_1 = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/order/page/list';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const pageListUsingPOST_1_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/order/page/list'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const pageListUsingPOST_1URL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/order/page/list';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/order/page/list',
    queryTType: 'post',
  };
  return result;
};
/**
 * pdf转image
 * request: pdfTransImage2UsingGET
 * @param pdfUrl - pdfUrl
 */
export const pdfTransImage2UsingGET = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/order/pdfTransImage2';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['pdfUrl'] !== undefined) {
    queryParameters['pdfUrl'] = parameters['pdfUrl'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const pdfTransImage2UsingGET_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/order/pdfTransImage2'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['pdfUrl'] !== undefined) {
    queryParameters['pdfUrl'] = parameters['pdfUrl'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const pdfTransImage2UsingGETURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/order/pdfTransImage2';
  if (parameters['pdfUrl'] !== undefined) {
    queryParameters['pdfUrl'] = parameters['pdfUrl'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/order/pdfTransImage2',
    queryTType: 'get',
  };
  return result;
};
/**
 * 查询详细订单
 * request: queryOrderUsingGET
 * @param X-Fast-UserId - X-Fast-UserId
 * @param orderNo - orderNo
 */
export const queryOrderUsingGET = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/order/query/byOrderNo';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['orderNo'] !== undefined) {
    queryParameters['orderNo'] = parameters['orderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const queryOrderUsingGET_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/order/query/byOrderNo'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['orderNo'] !== undefined) {
    queryParameters['orderNo'] = parameters['orderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const queryOrderUsingGETURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/order/query/byOrderNo';
  if (parameters['orderNo'] !== undefined) {
    queryParameters['orderNo'] = parameters['orderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/order/query/byOrderNo',
    queryTType: 'get',
  };
  return result;
};
/**
 * queryGudianInfo
 * request: queryGudianInfoUsingGET
 * @param patientId - patientId
 */
export const queryGudianInfoUsingGET = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/orderRights/gudian/byId';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['patientId'] !== undefined) {
    queryParameters['patientId'] = parameters['patientId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const queryGudianInfoUsingGET_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/orderRights/gudian/byId'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['patientId'] !== undefined) {
    queryParameters['patientId'] = parameters['patientId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const queryGudianInfoUsingGETURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/orderRights/gudian/byId';
  if (parameters['patientId'] !== undefined) {
    queryParameters['patientId'] = parameters['patientId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/orderRights/gudian/byId',
    queryTType: 'get',
  };
  return result;
};
/**
 * 查看服务包订单列表
 * request: pageListUsingPOST_2
 * @param X-Fast-UserId - X-Fast-UserId
 * @param req - req
 */
export const pageListUsingPOST_2 = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/orderRights/page/list';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const pageListUsingPOST_2_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/orderRights/page/list'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const pageListUsingPOST_2URL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/orderRights/page/list';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/orderRights/page/list',
    queryTType: 'post',
  };
  return result;
};
/**
 * 是否展示服务包
 * request: queryShowOrderRightsUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 */
export const queryShowOrderRightsUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/orderRights/query/isShow';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryShowOrderRightsUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/orderRights/query/isShow'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryShowOrderRightsUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/orderRights/query/isShow';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/orderRights/query/isShow',
    queryTType: 'post',
  };
  return result;
};
/**
 * 添加地址
 * request: addOutPatientAddressUsingPOST
 * @param addressDetailReq - addressDetailReq
 * @param X-Fast-UserId - X-Fast-UserId
 */
export const addOutPatientAddressUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/outPatient/add/address';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['addressDetailReq'] !== undefined) {
    body = parameters['addressDetailReq'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const addOutPatientAddressUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/outPatient/add/address'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['addressDetailReq'] !== undefined) {
    body = parameters['addressDetailReq'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const addOutPatientAddressUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/outPatient/add/address';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/outPatient/add/address',
    queryTType: 'post',
  };
  return result;
};
/**
 * 查询地址接口
 * request: queryOrderAddressUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 */
export const queryOrderAddressUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/outPatient/queryListByUserId';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryOrderAddressUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/outPatient/queryListByUserId'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryOrderAddressUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/outPatient/queryListByUserId';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/outPatient/queryListByUserId',
    queryTType: 'post',
  };
  return result;
};
/**
 * 查询用户最近一次的一个地址
 * request: queryLastOneOrderAddressByUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 */
export const queryLastOneOrderAddressByUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/outPatient/queryOneByUserId';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryLastOneOrderAddressByUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/outPatient/queryOneByUserId'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryLastOneOrderAddressByUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/outPatient/queryOneByUserId';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/outPatient/queryOneByUserId',
    queryTType: 'post',
  };
  return result;
};
/**
 * 根据patientId删除患者
 * request: deleteHospitalPatientUsingPOST
 * @param req - req
 */
export const deleteHospitalPatientUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/patient/deleteById';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const deleteHospitalPatientUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/patient/deleteById'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const deleteHospitalPatientUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/patient/deleteById';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/patient/deleteById',
    queryTType: 'post',
  };
  return result;
};
/**
 * 查询理赔购药订单信息
 * request: queryDrugOrderInfoUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param req - req
 */
export const queryDrugOrderInfoUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/query/claimDrugOrder';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryDrugOrderInfoUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/query/claimDrugOrder'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryDrugOrderInfoUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/query/claimDrugOrder';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/query/claimDrugOrder',
    queryTType: 'post',
  };
  return result;
};
/**
 * 查询科室信息
 * request: queryDepartmentUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param req - req
 */
export const queryDepartmentUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/query/departmentList';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryDepartmentUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/query/departmentList'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryDepartmentUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/query/departmentList';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/query/departmentList',
    queryTType: 'post',
  };
  return result;
};
/**
 * 查询7天内是否购药
 * request: drugOrderWeekUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param phone - phone
 * @param drugOrderResource - drugOrderResource
 */
export const drugOrderWeekUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/query/drugOrderWeek';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['phone'] !== undefined) {
    queryParameters['phone'] = parameters['phone'];
  }
  if (parameters['drugOrderResource'] !== undefined) {
    queryParameters['drugOrderResource'] = parameters['drugOrderResource'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const drugOrderWeekUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/query/drugOrderWeek'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['phone'] !== undefined) {
    queryParameters['phone'] = parameters['phone'];
  }
  if (parameters['drugOrderResource'] !== undefined) {
    queryParameters['drugOrderResource'] = parameters['drugOrderResource'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const drugOrderWeekUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/query/drugOrderWeek';
  if (parameters['phone'] !== undefined) {
    queryParameters['phone'] = parameters['phone'];
  }
  if (parameters['drugOrderResource'] !== undefined) {
    queryParameters['drugOrderResource'] = parameters['drugOrderResource'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/query/drugOrderWeek',
    queryTType: 'post',
  };
  return result;
};
/**
 * 健康档案查询
 * request: queryHealthFileUsingPOST
 * @param X-Mth-Hospital-Token - X-Mth-Hospital-Token
 * @param X-Fast-UserId - X-Fast-UserId
 * @param patientId - patientId
 */
export const queryHealthFileUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/query/healthFile';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['patientId'] !== undefined) {
    queryParameters['patientId'] = parameters['patientId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryHealthFileUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/query/healthFile'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['patientId'] !== undefined) {
    queryParameters['patientId'] = parameters['patientId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryHealthFileUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/query/healthFile';
  if (parameters['patientId'] !== undefined) {
    queryParameters['patientId'] = parameters['patientId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/query/healthFile',
    queryTType: 'post',
  };
  return result;
};
/**
 * 初始购买权益包前流程判断（有激活记录则直接进入问诊流程，未入会则去ykf入会，有购买老会员则0元激活，没有则可购买199会员或者代0元激活）
 * request: judgeInitialRightsUsingPOST
 * @param X-Mth-Hospital-Token - X-Mth-Hospital-Token
 * @param X-Fast-UserId - X-Fast-UserId
 */
export const judgeInitialRightsUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/query/judgeInitialRights';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const judgeInitialRightsUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/query/judgeInitialRights'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const judgeInitialRightsUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/query/judgeInitialRights';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/query/judgeInitialRights',
    queryTType: 'post',
  };
  return result;
};
/**
 * 合规问诊选择就诊人时判断是否需要激活权益包（老会员且未激活则0元激活，不是会员则无法进行合规问诊）
 * request: judgeInquiryRightsUsingPOST
 * @param X-Mth-Hospital-Token - X-Mth-Hospital-Token
 * @param X-Fast-UserId - X-Fast-UserId
 * @param req - req
 */
export const judgeInquiryRightsUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/query/judgeInquiryRights';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const judgeInquiryRightsUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/query/judgeInquiryRights'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const judgeInquiryRightsUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/query/judgeInquiryRights';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/query/judgeInquiryRights',
    queryTType: 'post',
  };
  return result;
};
/**
 * 查询该问诊订单是否完成购药
 * request: queryTrialOrderUsingPOST
 * @param X-Mth-Hospital-Token - X-Mth-Hospital-Token
 * @param X-Fast-UserId - X-Fast-UserId
 * @param orderNo - orderNo
 */
export const queryTrialOrderUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/query/trialOrder/status';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['orderNo'] !== undefined) {
    queryParameters['orderNo'] = parameters['orderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryTrialOrderUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/query/trialOrder/status'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['orderNo'] !== undefined) {
    queryParameters['orderNo'] = parameters['orderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryTrialOrderUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/query/trialOrder/status';
  if (parameters['orderNo'] !== undefined) {
    queryParameters['orderNo'] = parameters['orderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/query/trialOrder/status',
    queryTType: 'post',
  };
  return result;
};
/**
 * 查询药房省市区信息
 * request: areaPharmacyQueryUsingPOST
 * @param X-Mth-Hospital-Token - X-Mth-Hospital-Token
 * @param req - req
 */
export const areaPharmacyQueryUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/query/ykfAreaPharmacyInfo';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const areaPharmacyQueryUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/query/ykfAreaPharmacyInfo'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const areaPharmacyQueryUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/query/ykfAreaPharmacyInfo';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/query/ykfAreaPharmacyInfo',
    queryTType: 'post',
  };
  return result;
};
/**
 * 查询药品信息
 * request: queryDrugInfoUsingPOST
 * @param X-Mth-Hospital-Token - X-Mth-Hospital-Token
 * @param req - req
 */
export const queryDrugInfoUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/query/ykfDrugInfo';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryDrugInfoUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/query/ykfDrugInfo'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryDrugInfoUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/query/ykfDrugInfo';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/query/ykfDrugInfo',
    queryTType: 'post',
  };
  return result;
};
/**
 * 查询职业信息
 * request: queryJobInfoUsingPOST
 * @param X-Mth-Hospital-Token - X-Mth-Hospital-Token
 * @param X-Fast-UserId - X-Fast-UserId
 * @param dictCode - dictCode
 */
export const queryJobInfoUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/query/ykfJobInfo';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['dictCode'] !== undefined) {
    queryParameters['dictCode'] = parameters['dictCode'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryJobInfoUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/query/ykfJobInfo'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['dictCode'] !== undefined) {
    queryParameters['dictCode'] = parameters['dictCode'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryJobInfoUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/query/ykfJobInfo';
  if (parameters['dictCode'] !== undefined) {
    queryParameters['dictCode'] = parameters['dictCode'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/query/ykfJobInfo',
    queryTType: 'post',
  };
  return result;
};
/**
 * 查询药房经纬度信息
 * request: latlngPharmacyQueryUsingPOST
 * @param X-Mth-Hospital-Token - X-Mth-Hospital-Token
 * @param req - req
 */
export const latlngPharmacyQueryUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/query/ykfLatlngPharmacyInfo';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const latlngPharmacyQueryUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/query/ykfLatlngPharmacyInfo'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const latlngPharmacyQueryUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/query/ykfLatlngPharmacyInfo';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/query/ykfLatlngPharmacyInfo',
    queryTType: 'post',
  };
  return result;
};
/**
 * 根据type查询对应的字典信息
 * request: queryDataDictByTypeUsingGET
 * @param type - type
 */
export const queryDataDictByTypeUsingGET = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/queryDict/byType';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['type'] !== undefined) {
    queryParameters['type'] = parameters['type'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const queryDataDictByTypeUsingGET_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/queryDict/byType'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['type'] !== undefined) {
    queryParameters['type'] = parameters['type'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const queryDataDictByTypeUsingGETURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/queryDict/byType';
  if (parameters['type'] !== undefined) {
    queryParameters['type'] = parameters['type'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/queryDict/byType',
    queryTType: 'get',
  };
  return result;
};
/**
 * 查询是否展示用户隐私协议
 * request: queryHospitalPrivacyUsingGET
 * @param X-Fast-UserId - X-Fast-UserId
 * @param project - project
 */
export const queryHospitalPrivacyUsingGET = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/queryHospitalPrivacy';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['project'] !== undefined) {
    queryParameters['project'] = parameters['project'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const queryHospitalPrivacyUsingGET_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/queryHospitalPrivacy'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['project'] !== undefined) {
    queryParameters['project'] = parameters['project'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const queryHospitalPrivacyUsingGETURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/queryHospitalPrivacy';
  if (parameters['project'] !== undefined) {
    queryParameters['project'] = parameters['project'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/queryHospitalPrivacy',
    queryTType: 'get',
  };
  return result;
};
/**
 * 根据 userId 查询就诊人列表
 * request: queryListHospitalPatientUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param req - req
 */
export const queryListHospitalPatientUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/queryList/byUserId';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryListHospitalPatientUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/queryList/byUserId'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryListHospitalPatientUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/queryList/byUserId';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/queryList/byUserId',
    queryTType: 'post',
  };
  return result;
};
/**
 * 查询就诊人信息详情 (就诊人和紧急联系人/监护人)
 * request: queryHospitalPatientUsingGET
 * @param patientId - patientId
 */
export const queryHospitalPatientUsingGET = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/queryPatient/byPatientId';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['patientId'] !== undefined) {
    queryParameters['patientId'] = parameters['patientId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const queryHospitalPatientUsingGET_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/queryPatient/byPatientId'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['patientId'] !== undefined) {
    queryParameters['patientId'] = parameters['patientId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const queryHospitalPatientUsingGETURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/queryPatient/byPatientId';
  if (parameters['patientId'] !== undefined) {
    queryParameters['patientId'] = parameters['patientId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/queryPatient/byPatientId',
    queryTType: 'get',
  };
  return result;
};
/**
 * 根据订单遍号查找patientId
 * request: queryPatientIdByOrderIdUsingGET
 * @param orderId - orderId
 */
export const queryPatientIdByOrderIdUsingGET = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/queryPatientIdByOrderId';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['orderId'] !== undefined) {
    queryParameters['orderId'] = parameters['orderId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const queryPatientIdByOrderIdUsingGET_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/queryPatientIdByOrderId'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['orderId'] !== undefined) {
    queryParameters['orderId'] = parameters['orderId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const queryPatientIdByOrderIdUsingGETURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/queryPatientIdByOrderId';
  if (parameters['orderId'] !== undefined) {
    queryParameters['orderId'] = parameters['orderId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/queryPatientIdByOrderId',
    queryTType: 'get',
  };
  return result;
};
/**
 * 根据就诊人信息判断跳转0元购买问诊包或者跳转健康档案
 * request: jumpSourceUsingPOST
 * @param req - req
 */
export const jumpSourceUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/qyb/jumpSource';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const jumpSourceUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/qyb/jumpSource'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const jumpSourceUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/qyb/jumpSource';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/qyb/jumpSource',
    queryTType: 'post',
  };
  return result;
};
/**
 * 订单处方信息更新
 * request: renewPrescriptionUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param req - req
 */
export const renewPrescriptionUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/renew/prescription';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const renewPrescriptionUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/renew/prescription'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const renewPrescriptionUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/renew/prescription';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/renew/prescription',
    queryTType: 'post',
  };
  return result;
};
/**
 * 订单病历信息更新
 * request: renewRevisitUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param req - req
 */
export const renewRevisitUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/renew/revisit';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const renewRevisitUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/renew/revisit'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const renewRevisitUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/renew/revisit';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/renew/revisit',
    queryTType: 'post',
  };
  return result;
};
/**
 * 新增就诊人信息
 * request: saveHospitalPatientUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param req - req
 */
export const saveHospitalPatientUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/saveHospitalPatient';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const saveHospitalPatientUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/saveHospitalPatient'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const saveHospitalPatientUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/saveHospitalPatient';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/saveHospitalPatient',
    queryTType: 'post',
  };
  return result;
};
/**
 * downloadFile
 * request: downloadFileUsingGET
 * @param waybillNo - waybillNo
 */
export const downloadFileUsingGET = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/sf/faceOrder/download';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['waybillNo'] !== undefined) {
    queryParameters['waybillNo'] = parameters['waybillNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const downloadFileUsingGET_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/sf/faceOrder/download'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['waybillNo'] !== undefined) {
    queryParameters['waybillNo'] = parameters['waybillNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const downloadFileUsingGETURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/sf/faceOrder/download';
  if (parameters['waybillNo'] !== undefined) {
    queryParameters['waybillNo'] = parameters['waybillNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/sf/faceOrder/download',
    queryTType: 'get',
  };
  return result;
};
/**
 * generateFaceOrder
 * request: generateFaceOrderUsingGET
 * @param drugOrderNo - drugOrderNo
 */
export const generateFaceOrderUsingGET = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/sf/logistic/generateFaceOrder';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['drugOrderNo'] !== undefined) {
    queryParameters['drugOrderNo'] = parameters['drugOrderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const generateFaceOrderUsingGET_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/sf/logistic/generateFaceOrder'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['drugOrderNo'] !== undefined) {
    queryParameters['drugOrderNo'] = parameters['drugOrderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const generateFaceOrderUsingGETURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/sf/logistic/generateFaceOrder';
  if (parameters['drugOrderNo'] !== undefined) {
    queryParameters['drugOrderNo'] = parameters['drugOrderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/sf/logistic/generateFaceOrder',
    queryTType: 'get',
  };
  return result;
};
/**
 * getLogisticsInfo
 * request: getLogisticsInfoUsingGET
 * @param drugNo - drugNo
 */
export const getLogisticsInfoUsingGET = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/sf/logistic/query';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['drugNo'] !== undefined) {
    queryParameters['drugNo'] = parameters['drugNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const getLogisticsInfoUsingGET_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/sf/logistic/query'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['drugNo'] !== undefined) {
    queryParameters['drugNo'] = parameters['drugNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const getLogisticsInfoUsingGETURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/sf/logistic/query';
  if (parameters['drugNo'] !== undefined) {
    queryParameters['drugNo'] = parameters['drugNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/sf/logistic/query',
    queryTType: 'get',
  };
  return result;
};
/**
 * getLogisticsInfoList
 * request: getLogisticsInfoListUsingGET
 * @param bspOrderNo - bspOrderNo
 */
export const getLogisticsInfoListUsingGET = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/sf/logistic/queryList';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['bspOrderNo'] !== undefined) {
    queryParameters['bspOrderNo'] = parameters['bspOrderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const getLogisticsInfoListUsingGET_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/sf/logistic/queryList'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['bspOrderNo'] !== undefined) {
    queryParameters['bspOrderNo'] = parameters['bspOrderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const getLogisticsInfoListUsingGETURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/sf/logistic/queryList';
  if (parameters['bspOrderNo'] !== undefined) {
    queryParameters['bspOrderNo'] = parameters['bspOrderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/sf/logistic/queryList',
    queryTType: 'get',
  };
  return result;
};
/**
 * 获取物流节点信息
 * request: queryRouteListUsingGET
 * @param drugOrderNo - drugOrderNo
 */
export const queryRouteListUsingGET = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/sf/logistic/queryRouteList';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['drugOrderNo'] !== undefined) {
    queryParameters['drugOrderNo'] = parameters['drugOrderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const queryRouteListUsingGET_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/sf/logistic/queryRouteList'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['drugOrderNo'] !== undefined) {
    queryParameters['drugOrderNo'] = parameters['drugOrderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const queryRouteListUsingGETURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/sf/logistic/queryRouteList';
  if (parameters['drugOrderNo'] !== undefined) {
    queryParameters['drugOrderNo'] = parameters['drugOrderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/sf/logistic/queryRouteList',
    queryTType: 'get',
  };
  return result;
};
/**
 * 顺丰下订单接口
 * request: saveSfOrderUsingPOST
 * @param req - req
 */
export const saveSfOrderUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/sf/save';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const saveSfOrderUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/sf/save'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const saveSfOrderUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/sf/save';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/sf/save',
    queryTType: 'post',
  };
  return result;
};
/**
 * 苏惠保
 * request: judgeShbRightUsingPOST
 * @param userId - userId
 */
export const judgeShbRightUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/shb/judgeShbRight';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['userId'] !== undefined) {
    queryParameters['userId'] = parameters['userId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const judgeShbRightUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/shb/judgeShbRight'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['userId'] !== undefined) {
    queryParameters['userId'] = parameters['userId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const judgeShbRightUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/shb/judgeShbRight';
  if (parameters['userId'] !== undefined) {
    queryParameters['userId'] = parameters['userId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/shb/judgeShbRight',
    queryTType: 'post',
  };
  return result;
};
/**
 * 同步商城购药状态
 * request: synchroShopDrugOrderStatusUsingPOST
 * @param req - req
 */
export const synchroShopDrugOrderStatusUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/shop/synchroShopDrugOrderStatus';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const synchroShopDrugOrderStatusUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/shop/synchroShopDrugOrderStatus'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const synchroShopDrugOrderStatusUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/shop/synchroShopDrugOrderStatus';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/shop/synchroShopDrugOrderStatus',
    queryTType: 'post',
  };
  return result;
};
/**
 * 生成理赔购药订单
 * request: submitClaimDrugOrderUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param X-Fast-Channel - X-Fast-Channel
 * @param req - req
 */
export const submitClaimDrugOrderUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/submit/claimDrugOrder';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const submitClaimDrugOrderUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/submit/claimDrugOrder'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const submitClaimDrugOrderUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/submit/claimDrugOrder';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/submit/claimDrugOrder',
    queryTType: 'post',
  };
  return result;
};
/**
 * 试算订单提交
 * request: complianceDrugUsingPOST
 * @param X-Mth-Hospital-Token - X-Mth-Hospital-Token
 * @param X-Fast-UserId - X-Fast-UserId
 * @param orderNo - orderNo
 */
export const complianceDrugUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/submit/compliance/drug';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['orderNo'] !== undefined) {
    queryParameters['orderNo'] = parameters['orderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const complianceDrugUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/submit/compliance/drug'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['orderNo'] !== undefined) {
    queryParameters['orderNo'] = parameters['orderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const complianceDrugUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/submit/compliance/drug';
  if (parameters['orderNo'] !== undefined) {
    queryParameters['orderNo'] = parameters['orderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/submit/compliance/drug',
    queryTType: 'post',
  };
  return result;
};
/**
 * 提交优惠券订单
 * request: submitCouponsOrderUsingPOST
 * @param req - req
 */
export const submitCouponsOrderUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/submit/couponsOrder';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const submitCouponsOrderUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/submit/couponsOrder'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const submitCouponsOrderUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/submit/couponsOrder';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/submit/couponsOrder',
    queryTType: 'post',
  };
  return result;
};
/**
 * 创建问诊订单接口
 * request: createHospitalOrderUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param req - req
 */
export const createHospitalOrderUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/submit/createOrder';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const createHospitalOrderUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/submit/createOrder'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const createHospitalOrderUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/submit/createOrder';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/submit/createOrder',
    queryTType: 'post',
  };
  return result;
};
/**
 * 擎乐购药订单签名通知
 * request: qingLeDrugOrderSignUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param req - req
 */
export const qingLeDrugOrderSignUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/submit/qingLeDrugOrderSign';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const qingLeDrugOrderSignUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/submit/qingLeDrugOrderSign'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const qingLeDrugOrderSignUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/submit/qingLeDrugOrderSign';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/submit/qingLeDrugOrderSign',
    queryTType: 'post',
  };
  return result;
};
/**
 * 提交问诊包订单
 * request: submitOrderUsingPOST
 * @param X-Mth-Hospital-Token - X-Mth-Hospital-Token
 * @param X-Fast-UserId - X-Fast-UserId
 * @param req - req
 */
export const submitOrderUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/submit/rights/order';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const submitOrderUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/submit/rights/order'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const submitOrderUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/submit/rights/order';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/submit/rights/order',
    queryTType: 'post',
  };
  return result;
};
/**
 * 健康档案购药订单提交
 * request: submitHealthFileUsingPOST
 * @param X-Mth-Hospital-Token - X-Mth-Hospital-Token
 * @param X-Fast-UserId - X-Fast-UserId
 * @param healthFileReq - healthFileReq
 */
export const submitHealthFileUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/submit/trialOrder/healthFile';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['healthFileReq'] !== undefined) {
    body = parameters['healthFileReq'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const submitHealthFileUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/submit/trialOrder/healthFile'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['healthFileReq'] !== undefined) {
    body = parameters['healthFileReq'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const submitHealthFileUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/submit/trialOrder/healthFile';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/submit/trialOrder/healthFile',
    queryTType: 'post',
  };
  return result;
};
/**
 * 健康档案问诊购药订单提交
 * request: healthFileByHospitalNoUsingPOST
 * @param X-Mth-Hospital-Token - X-Mth-Hospital-Token
 * @param X-Fast-UserId - X-Fast-UserId
 * @param hospitalOrderNo - hospitalOrderNo
 */
export const healthFileByHospitalNoUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/submit/trialOrder/healthFileByHospitalNo';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['hospitalOrderNo'] !== undefined) {
    queryParameters['hospitalOrderNo'] = parameters['hospitalOrderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const healthFileByHospitalNoUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/submit/trialOrder/healthFileByHospitalNo'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['hospitalOrderNo'] !== undefined) {
    queryParameters['hospitalOrderNo'] = parameters['hospitalOrderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const healthFileByHospitalNoUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/submit/trialOrder/healthFileByHospitalNo';
  if (parameters['hospitalOrderNo'] !== undefined) {
    queryParameters['hospitalOrderNo'] = parameters['hospitalOrderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/submit/trialOrder/healthFileByHospitalNo',
    queryTType: 'post',
  };
  return result;
};
/**
 * 提交药企问诊包订单
 * request: submitOrderYqUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param req - req
 */
export const submitOrderYqUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/submit/yq/rightsOrder';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const submitOrderYqUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/submit/yq/rightsOrder'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const submitOrderYqUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/submit/yq/rightsOrder';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/submit/yq/rightsOrder',
    queryTType: 'post',
  };
  return result;
};
/**
 * 更新处方和病历文件
 * request: updateImgUsingPOST
 * @param req - req
 */
export const updateImgUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/update/img';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const updateImgUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/update/img'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const updateImgUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/update/img';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/update/img',
    queryTType: 'post',
  };
  return result;
};
/**
 * 上传语音数据转url
 * request: uploadVoiceFilesUsingPOST
 * @param file - file
 */
export const uploadVoiceFilesUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/upload/voiceFiles';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['file'] !== undefined) {
    queryParameters['file'] = parameters['file'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const uploadVoiceFilesUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/upload/voiceFiles'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['file'] !== undefined) {
    queryParameters['file'] = parameters['file'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const uploadVoiceFilesUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/upload/voiceFiles';
  if (parameters['file'] !== undefined) {
    queryParameters['file'] = parameters['file'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/upload/voiceFiles',
    queryTType: 'post',
  };
  return result;
};
/**
 * getWarehouseByCode
 * request: getWarehouseByCodeUsingGET
 * @param code - code
 */
export const getWarehouseByCodeUsingGET = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/warehouse/code';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['code'] !== undefined) {
    queryParameters['code'] = parameters['code'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const getWarehouseByCodeUsingGET_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/warehouse/code'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['code'] !== undefined) {
    queryParameters['code'] = parameters['code'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const getWarehouseByCodeUsingGETURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/warehouse/code';
  if (parameters['code'] !== undefined) {
    queryParameters['code'] = parameters['code'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/warehouse/code',
    queryTType: 'get',
  };
  return result;
};
/**
 * 获取微信语音并存储
 * request: wxVoiceFileUsingPOST
 * @param mediaId - mediaId
 * @param orderNo - orderNo
 */
export const wxVoiceFileUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/wx/voiceFile';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['mediaId'] !== undefined) {
    queryParameters['mediaId'] = parameters['mediaId'];
  }
  if (parameters['orderNo'] !== undefined) {
    queryParameters['orderNo'] = parameters['orderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const wxVoiceFileUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/wx/voiceFile'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['mediaId'] !== undefined) {
    queryParameters['mediaId'] = parameters['mediaId'];
  }
  if (parameters['orderNo'] !== undefined) {
    queryParameters['orderNo'] = parameters['orderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const wxVoiceFileUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/wx/voiceFile';
  if (parameters['mediaId'] !== undefined) {
    queryParameters['mediaId'] = parameters['mediaId'];
  }
  if (parameters['orderNo'] !== undefined) {
    queryParameters['orderNo'] = parameters['orderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/wx/voiceFile',
    queryTType: 'post',
  };
  return result;
};
/**
 * 医生接单结果推送
 * request: assignOrderResultUsingPOST
 * @param req - req
 */
export const assignOrderResultUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/xy/assignOrderResult';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const assignOrderResultUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/xy/assignOrderResult'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const assignOrderResultUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/xy/assignOrderResult';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/xy/assignOrderResult',
    queryTType: 'post',
  };
  return result;
};
/**
 * 查询用户在该医生下的所有优惠券
 * request: queryCouponsListUsingPOST
 * @param req - req
 */
export const queryCouponsListUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/xy/couponsInfo';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryCouponsListUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/xy/couponsInfo'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryCouponsListUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/xy/couponsInfo';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/xy/couponsInfo',
    queryTType: 'post',
  };
  return result;
};
/**
 * 生成医生二维码
 * request: noPayCancelOrderUsingGET
 * @param req - req
 */
export const noPayCancelOrderUsingGET = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/xy/createQrCode';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const noPayCancelOrderUsingGET_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/xy/createQrCode'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const noPayCancelOrderUsingGETURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/xy/createQrCode';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/xy/createQrCode',
    queryTType: 'get',
  };
  return result;
};
/**
 * 生成医生二维码
 * request: noPayCancelOrderUsingHEAD
 * @param req - req
 */
export const noPayCancelOrderUsingHEAD = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/xy/createQrCode';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('head', domain + path, body, queryParameters, form, config);
};
export const noPayCancelOrderUsingHEAD_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/xy/createQrCode'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('head', domain + path, body, queryParameters, form, config);
};
export const noPayCancelOrderUsingHEADURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/xy/createQrCode';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/xy/createQrCode',
    queryTType: 'head',
  };
  return result;
};
/**
 * 生成医生二维码
 * request: noPayCancelOrderUsingPOST_1
 * @param req - req
 */
export const noPayCancelOrderUsingPOST_1 = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/xy/createQrCode';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const noPayCancelOrderUsingPOST_1_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/xy/createQrCode'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const noPayCancelOrderUsingPOST_1URL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/xy/createQrCode';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/xy/createQrCode',
    queryTType: 'post',
  };
  return result;
};
/**
 * 生成医生二维码
 * request: noPayCancelOrderUsingPUT
 * @param req - req
 */
export const noPayCancelOrderUsingPUT = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/xy/createQrCode';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('put', domain + path, body, queryParameters, form, config);
};
export const noPayCancelOrderUsingPUT_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/xy/createQrCode'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('put', domain + path, body, queryParameters, form, config);
};
export const noPayCancelOrderUsingPUTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/xy/createQrCode';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/xy/createQrCode',
    queryTType: 'put',
  };
  return result;
};
/**
 * 生成医生二维码
 * request: noPayCancelOrderUsingDELETE
 * @param req - req
 */
export const noPayCancelOrderUsingDELETE = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/xy/createQrCode';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config);
};
export const noPayCancelOrderUsingDELETE_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/xy/createQrCode'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config);
};
export const noPayCancelOrderUsingDELETEURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/xy/createQrCode';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/xy/createQrCode',
    queryTType: 'delete',
  };
  return result;
};
/**
 * 生成医生二维码
 * request: noPayCancelOrderUsingOPTIONS
 * @param req - req
 */
export const noPayCancelOrderUsingOPTIONS = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/xy/createQrCode';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('options', domain + path, body, queryParameters, form, config);
};
export const noPayCancelOrderUsingOPTIONS_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/xy/createQrCode'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('options', domain + path, body, queryParameters, form, config);
};
export const noPayCancelOrderUsingOPTIONSURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/xy/createQrCode';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/xy/createQrCode',
    queryTType: 'options',
  };
  return result;
};
/**
 * 生成医生二维码
 * request: noPayCancelOrderUsingPATCH
 * @param req - req
 */
export const noPayCancelOrderUsingPATCH = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/xy/createQrCode';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('patch', domain + path, body, queryParameters, form, config);
};
export const noPayCancelOrderUsingPATCH_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/xy/createQrCode'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('patch', domain + path, body, queryParameters, form, config);
};
export const noPayCancelOrderUsingPATCHURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/xy/createQrCode';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/xy/createQrCode',
    queryTType: 'patch',
  };
  return result;
};
/**
 * 订单完成推送
 * request: finishOrderUsingPOST
 * @param req - req
 */
export const finishOrderUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/xy/finishOrder';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const finishOrderUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/xy/finishOrder'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const finishOrderUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/xy/finishOrder';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/xy/finishOrder',
    queryTType: 'post',
  };
  return result;
};
/**
 * ocr识别
 * request: getOcrInfoUsingPOST
 * @param req - req
 */
export const getOcrInfoUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/xy/getOcrInfo';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const getOcrInfoUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/xy/getOcrInfo'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const getOcrInfoUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/xy/getOcrInfo';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/xy/getOcrInfo',
    queryTType: 'post',
  };
  return result;
};
/**
 * 修改优惠券状态
 * request: modifyCouponStatusUsingPOST
 * @param xyCouponOrderReq - xyCouponOrderReq
 */
export const modifyCouponStatusUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/xy/modifyCouponStatus';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['xyCouponOrderReq'] !== undefined) {
    body = parameters['xyCouponOrderReq'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const modifyCouponStatusUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/xy/modifyCouponStatus'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['xyCouponOrderReq'] !== undefined) {
    body = parameters['xyCouponOrderReq'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const modifyCouponStatusUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/xy/modifyCouponStatus';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/xy/modifyCouponStatus',
    queryTType: 'post',
  };
  return result;
};
/**
 * 自研未支付取消订单
 * request: noPayCancelOrderUsingPOST
 * @param req - req
 */
export const noPayCancelOrderUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/xy/noPayCancelOrder';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const noPayCancelOrderUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/xy/noPayCancelOrder'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const noPayCancelOrderUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/xy/noPayCancelOrder';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/xy/noPayCancelOrder',
    queryTType: 'post',
  };
  return result;
};
/**
 * 根据医生端xyOrderNo查询地址信息
 * request: queryPageListUsingPOST
 * @param req - req
 */
export const queryPageListUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/xy/orderAddress/queryByXyOrderNo';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryPageListUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/xy/orderAddress/queryByXyOrderNo'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryPageListUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/xy/orderAddress/queryByXyOrderNo';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/xy/orderAddress/queryByXyOrderNo',
    queryTType: 'post',
  };
  return result;
};
/**
 * 查询服务包订单列表接口
 * request: queryPageListUsingPOST_1
 * @param req - req
 */
export const queryPageListUsingPOST_1 = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/xy/orderRights/list';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryPageListUsingPOST_1_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/xy/orderRights/list'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryPageListUsingPOST_1URL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/xy/orderRights/list';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/xy/orderRights/list',
    queryTType: 'post',
  };
  return result;
};
/**
 * 查询服务包订单列表接口
 * request: queryOrderResourceUsingPOST
 */
export const queryOrderResourceUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/xy/orderRights/resource';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryOrderResourceUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/xy/orderRights/resource'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryOrderResourceUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/xy/orderRights/resource';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/xy/orderRights/resource',
    queryTType: 'post',
  };
  return result;
};
/**
 * 机器人订单完成推送发豆
 * request: pushMarketOrderUsingPOST
 * @param req - req
 */
export const pushMarketOrderUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/xy/pushMarketOrder';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const pushMarketOrderUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/xy/pushMarketOrder'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const pushMarketOrderUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/xy/pushMarketOrder';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/xy/pushMarketOrder',
    queryTType: 'post',
  };
  return result;
};
/**
 * 医生端推送处方
 * request: pushPrescriptionUsingPOST
 * @param resp - resp
 */
export const pushPrescriptionUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/xy/pushPrescription';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['resp'] !== undefined) {
    body = parameters['resp'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const pushPrescriptionUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/xy/pushPrescription'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['resp'] !== undefined) {
    body = parameters['resp'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const pushPrescriptionUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/xy/pushPrescription';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/xy/pushPrescription',
    queryTType: 'post',
  };
  return result;
};
/**
 * 查询就诊人信息详情 (就诊人和紧急联系人/监护人)
 * request: queryHospitalPatientForHnUsingGET
 * @param ykfPatientId - ykfPatientId
 */
export const queryHospitalPatientForHnUsingGET = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/xy/queryPatient/byYkfPatientId';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['ykfPatientId'] !== undefined) {
    queryParameters['ykfPatientId'] = parameters['ykfPatientId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const queryHospitalPatientForHnUsingGET_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/xy/queryPatient/byYkfPatientId'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['ykfPatientId'] !== undefined) {
    queryParameters['ykfPatientId'] = parameters['ykfPatientId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const queryHospitalPatientForHnUsingGETURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/xy/queryPatient/byYkfPatientId';
  if (parameters['ykfPatientId'] !== undefined) {
    queryParameters['ykfPatientId'] = parameters['ykfPatientId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/xy/queryPatient/byYkfPatientId',
    queryTType: 'get',
  };
  return result;
};
/**
 * ykf会员退款
 * request: refundMemberUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param orderNo - orderNo
 */
export const refundMemberUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/ykf/refundMember';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['orderNo'] !== undefined) {
    queryParameters['orderNo'] = parameters['orderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const refundMemberUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/ykf/refundMember'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['orderNo'] !== undefined) {
    queryParameters['orderNo'] = parameters['orderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const refundMemberUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/ykf/refundMember';
  if (parameters['orderNo'] !== undefined) {
    queryParameters['orderNo'] = parameters['orderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/ykf/refundMember',
    queryTType: 'post',
  };
  return result;
};
/**
 * 药企购药，根据用户判断跳转0元购买会员或者跳转健康档案
 * request: judgeUserJumpUsingPOST
 * @param req - req
 */
export const judgeUserJumpUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/yq/pushYqDataInfo';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const judgeUserJumpUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/yq/pushYqDataInfo'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const judgeUserJumpUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/yq/pushYqDataInfo';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/yq/pushYqDataInfo',
    queryTType: 'post',
  };
  return result;
};
/**
 * 药企购药，查询药企权益包购药相关信息
 * request: queryRightDrugInfoUsingPOST
 * @param yqDataOrderNo - yqDataOrderNo
 */
export const queryRightDrugInfoUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/yq/queryYqDataInfo';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['yqDataOrderNo'] !== undefined) {
    queryParameters['yqDataOrderNo'] = parameters['yqDataOrderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryRightDrugInfoUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/hospital/yq/queryYqDataInfo'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['yqDataOrderNo'] !== undefined) {
    queryParameters['yqDataOrderNo'] = parameters['yqDataOrderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryRightDrugInfoUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/hospital/yq/queryYqDataInfo';
  if (parameters['yqDataOrderNo'] !== undefined) {
    queryParameters['yqDataOrderNo'] = parameters['yqDataOrderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/hospital/yq/queryYqDataInfo',
    queryTType: 'post',
  };
  return result;
};
/**
 * 提交预约信息
 * request: addServiceInfoUsingPOST
 * @param req - req
 */
export const addServiceInfoUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/jywy/addServiceInfo';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const addServiceInfoUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/jywy/addServiceInfo'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const addServiceInfoUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/jywy/addServiceInfo';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/jywy/addServiceInfo',
    queryTType: 'post',
  };
  return result;
};
/**
 * 获取跳转权益宝链接
 * request: jumpQybSourceUsingGET
 * @param X-Mth-Hospital-Token - X-Mth-Hospital-Token
 * @param spEquityCode - spEquityCode
 */
export const jumpQybSourceUsingGET = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/jywy/jumpQybSource';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['spEquityCode'] !== undefined) {
    queryParameters['spEquityCode'] = parameters['spEquityCode'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const jumpQybSourceUsingGET_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/jywy/jumpQybSource'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['spEquityCode'] !== undefined) {
    queryParameters['spEquityCode'] = parameters['spEquityCode'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const jumpQybSourceUsingGETURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/jywy/jumpQybSource';
  if (parameters['spEquityCode'] !== undefined) {
    queryParameters['spEquityCode'] = parameters['spEquityCode'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/jywy/jumpQybSource',
    queryTType: 'get',
  };
  return result;
};
/**
 * 查询预约信息
 * request: queryServiceInfoUsingGET
 * @param orderNo - orderNo
 * @param equityCode - equityCode
 */
export const queryServiceInfoUsingGET = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/jywy/queryServiceInfo';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['orderNo'] !== undefined) {
    queryParameters['orderNo'] = parameters['orderNo'];
  }
  if (parameters['equityCode'] !== undefined) {
    queryParameters['equityCode'] = parameters['equityCode'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const queryServiceInfoUsingGET_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/jywy/queryServiceInfo'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['orderNo'] !== undefined) {
    queryParameters['orderNo'] = parameters['orderNo'];
  }
  if (parameters['equityCode'] !== undefined) {
    queryParameters['equityCode'] = parameters['equityCode'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const queryServiceInfoUsingGETURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/jywy/queryServiceInfo';
  if (parameters['orderNo'] !== undefined) {
    queryParameters['orderNo'] = parameters['orderNo'];
  }
  if (parameters['equityCode'] !== undefined) {
    queryParameters['equityCode'] = parameters['equityCode'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/jywy/queryServiceInfo',
    queryTType: 'get',
  };
  return result;
};
/**
 * 权益宝就医无忧订单推送
 * request: syncOrderInfoUsingPOST
 * @param req - req
 */
export const syncOrderInfoUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/jywy/syncOrderInfo';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const syncOrderInfoUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/jywy/syncOrderInfo'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const syncOrderInfoUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/jywy/syncOrderInfo';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/jywy/syncOrderInfo',
    queryTType: 'post',
  };
  return result;
};
/**
 * 关注医生
 * request: attentionDoctorUsingPOST_1
 * @param req - req
 */
export const attentionDoctorUsingPOST_1 = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/noLogin/hospital/attention';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const attentionDoctorUsingPOST_1_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/noLogin/hospital/attention'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const attentionDoctorUsingPOST_1URL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/noLogin/hospital/attention';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/noLogin/hospital/attention',
    queryTType: 'post',
  };
  return result;
};
/**
 * 同步门急诊数据
 * request: attentionDoctorUsingPOST_3
 * @param req - req
 */
export const attentionDoctorUsingPOST_3 = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/noLogin/hospital/data/open/outPatient';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const attentionDoctorUsingPOST_3_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/noLogin/hospital/data/open/outPatient'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const attentionDoctorUsingPOST_3URL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/noLogin/hospital/data/open/outPatient';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/noLogin/hospital/data/open/outPatient',
    queryTType: 'post',
  };
  return result;
};
/**
 * 商城跳转互联网医院详情
 * request: jumpHospitalOrderByShopUsingPOST
 * @param req - req
 */
export const jumpHospitalOrderByShopUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/noLogin/hospital/shop/jumpHospitalOrderByParam';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const jumpHospitalOrderByShopUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/noLogin/hospital/shop/jumpHospitalOrderByParam'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const jumpHospitalOrderByShopUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/noLogin/hospital/shop/jumpHospitalOrderByParam';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/noLogin/hospital/shop/jumpHospitalOrderByParam',
    queryTType: 'post',
  };
  return result;
};
/**
 * 商城跳转互联网医院
 * request: createOrderShopInfoUsingPOST
 * @param req - req
 */
export const createOrderShopInfoUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/noLogin/hospital/shopInfoCreateOrder';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const createOrderShopInfoUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/noLogin/hospital/shopInfoCreateOrder'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const createOrderShopInfoUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/noLogin/hospital/shopInfoCreateOrder';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/noLogin/hospital/shopInfoCreateOrder',
    queryTType: 'post',
  };
  return result;
};
/**
 * 同步患者档案
 * request: attentionDoctorUsingPOST_2
 * @param req - req
 */
export const attentionDoctorUsingPOST_2 = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/noLogin/hospital/synchroFiles';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const attentionDoctorUsingPOST_2_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/noLogin/hospital/synchroFiles'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const attentionDoctorUsingPOST_2URL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/noLogin/hospital/synchroFiles';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/noLogin/hospital/synchroFiles',
    queryTType: 'post',
  };
  return result;
};
/**
 * 购药订单支付回调
 * request: drugOrderPayNotifyUsingPOST
 * @param params - params
 */
export const drugOrderPayNotifyUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/nologin/drugOrder/trans/payNotify';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['params'] !== undefined) {
    queryParameters['params'] = parameters['params'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const drugOrderPayNotifyUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/nologin/drugOrder/trans/payNotify'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['params'] !== undefined) {
    queryParameters['params'] = parameters['params'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const drugOrderPayNotifyUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/nologin/drugOrder/trans/payNotify';
  if (parameters['params'] !== undefined) {
    queryParameters['params'] = parameters['params'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/nologin/drugOrder/trans/payNotify',
    queryTType: 'post',
  };
  return result;
};
/**
 * 购药订单退款回调
 * request: drugOrderRefundNotifyUsingPOST
 * @param params - params
 */
export const drugOrderRefundNotifyUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/nologin/drugOrder/trans/refundNotify';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['params'] !== undefined) {
    queryParameters['params'] = parameters['params'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const drugOrderRefundNotifyUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/nologin/drugOrder/trans/refundNotify'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['params'] !== undefined) {
    queryParameters['params'] = parameters['params'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const drugOrderRefundNotifyUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/nologin/drugOrder/trans/refundNotify';
  if (parameters['params'] !== undefined) {
    queryParameters['params'] = parameters['params'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/nologin/drugOrder/trans/refundNotify',
    queryTType: 'post',
  };
  return result;
};
/**
 * 问诊订单支付回调
 * request: enquiryOrderPayNotifyUsingPOST
 * @param params - params
 */
export const enquiryOrderPayNotifyUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/nologin/enquiryOrder/trans/payNotify';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['params'] !== undefined) {
    queryParameters['params'] = parameters['params'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const enquiryOrderPayNotifyUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/nologin/enquiryOrder/trans/payNotify'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['params'] !== undefined) {
    queryParameters['params'] = parameters['params'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const enquiryOrderPayNotifyUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/nologin/enquiryOrder/trans/payNotify';
  if (parameters['params'] !== undefined) {
    queryParameters['params'] = parameters['params'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/nologin/enquiryOrder/trans/payNotify',
    queryTType: 'post',
  };
  return result;
};
/**
 * 问诊订单退款回调
 * request: enquiryOrderRefundNotifyUsingPOST
 * @param params - params
 */
export const enquiryOrderRefundNotifyUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/nologin/enquiryOrder/trans/refundNotify';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['params'] !== undefined) {
    queryParameters['params'] = parameters['params'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const enquiryOrderRefundNotifyUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/nologin/enquiryOrder/trans/refundNotify'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['params'] !== undefined) {
    queryParameters['params'] = parameters['params'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const enquiryOrderRefundNotifyUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/nologin/enquiryOrder/trans/refundNotify';
  if (parameters['params'] !== undefined) {
    queryParameters['params'] = parameters['params'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/nologin/enquiryOrder/trans/refundNotify',
    queryTType: 'post',
  };
  return result;
};
/**
 * 金税系统回调
 * request: queryInvoiceUsingPOST
 * @param orderId - orderId
 */
export const queryInvoiceUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/nologin/hospital/callback/invoice';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['orderId'] !== undefined) {
    queryParameters['orderId'] = parameters['orderId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryInvoiceUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/nologin/hospital/callback/invoice'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['orderId'] !== undefined) {
    queryParameters['orderId'] = parameters['orderId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryInvoiceUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/nologin/hospital/callback/invoice';
  if (parameters['orderId'] !== undefined) {
    queryParameters['orderId'] = parameters['orderId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/nologin/hospital/callback/invoice',
    queryTType: 'post',
  };
  return result;
};
/**
 * 金税系统回调
 * request: queryInvoiceTestUsingPOST
 * @param orderId - orderId
 */
export const queryInvoiceTestUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/nologin/hospital/callback/invoiceTest';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['orderId'] !== undefined) {
    queryParameters['orderId'] = parameters['orderId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryInvoiceTestUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/nologin/hospital/callback/invoiceTest'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['orderId'] !== undefined) {
    queryParameters['orderId'] = parameters['orderId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryInvoiceTestUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/nologin/hospital/callback/invoiceTest';
  if (parameters['orderId'] !== undefined) {
    queryParameters['orderId'] = parameters['orderId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/nologin/hospital/callback/invoiceTest',
    queryTType: 'post',
  };
  return result;
};
/**
 * 咨询信息推送
 * request: consultInfoUsingPOST
 * @param req - req
 */
export const consultInfoUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/nologin/hospital/consultInfo';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const consultInfoUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/nologin/hospital/consultInfo'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const consultInfoUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/nologin/hospital/consultInfo';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/nologin/hospital/consultInfo',
    queryTType: 'post',
  };
  return result;
};
/**
 * 华氏订单结束推送
 * request: finishHsDrugInfoUsingPOST
 * @param req - req
 */
export const finishHsDrugInfoUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/nologin/hospital/hs/finishHsDrugInfo';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const finishHsDrugInfoUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/nologin/hospital/hs/finishHsDrugInfo'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const finishHsDrugInfoUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/nologin/hospital/hs/finishHsDrugInfo';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/nologin/hospital/hs/finishHsDrugInfo',
    queryTType: 'post',
  };
  return result;
};
/**
 * 华氏处方信息获取和推送
 * request: saveHsPrescriptionUsingPOST
 * @param req - req
 */
export const saveHsPrescriptionUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/nologin/hospital/hs/saveHsPrescription';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const saveHsPrescriptionUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/nologin/hospital/hs/saveHsPrescription'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const saveHsPrescriptionUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/nologin/hospital/hs/saveHsPrescription';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/nologin/hospital/hs/saveHsPrescription',
    queryTType: 'post',
  };
  return result;
};
/**
 * 理赔信息推送
 * request: claimInfoUsingPOST
 * @param req - req
 */
export const claimInfoUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/nologin/hospital/lp/claimInfo';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const claimInfoUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/nologin/hospital/lp/claimInfo'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const claimInfoUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/nologin/hospital/lp/claimInfo';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/nologin/hospital/lp/claimInfo',
    queryTType: 'post',
  };
  return result;
};
/**
 * 理赔信息查询
 * request: queryClaimInfoUsingGET
 * @param orderNo - orderNo
 */
export const queryClaimInfoUsingGET = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/nologin/hospital/lp/queryClaimInfo';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['orderNo'] !== undefined) {
    queryParameters['orderNo'] = parameters['orderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const queryClaimInfoUsingGET_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/nologin/hospital/lp/queryClaimInfo'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['orderNo'] !== undefined) {
    queryParameters['orderNo'] = parameters['orderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const queryClaimInfoUsingGETURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/nologin/hospital/lp/queryClaimInfo';
  if (parameters['orderNo'] !== undefined) {
    queryParameters['orderNo'] = parameters['orderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/nologin/hospital/lp/queryClaimInfo',
    queryTType: 'get',
  };
  return result;
};
/**
 * 擎乐信息推送
 * request: qingLeInfoUsingPOST
 * @param req - req
 */
export const qingLeInfoUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/nologin/hospital/qingLeInfo';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const qingLeInfoUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/nologin/hospital/qingLeInfo'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const qingLeInfoUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/nologin/hospital/qingLeInfo';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/nologin/hospital/qingLeInfo',
    queryTType: 'post',
  };
  return result;
};
/**
 * 查询购药订单列表
 * request: queryDrugOrderListUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param drugOrderApiReq - drugOrderApiReq
 */
export const queryDrugOrderListUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/nologin/hospital/query/drugOrderList';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['drugOrderApiReq'] !== undefined) {
    body = parameters['drugOrderApiReq'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryDrugOrderListUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/nologin/hospital/query/drugOrderList'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['drugOrderApiReq'] !== undefined) {
    body = parameters['drugOrderApiReq'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryDrugOrderListUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/nologin/hospital/query/drugOrderList';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/nologin/hospital/query/drugOrderList',
    queryTType: 'post',
  };
  return result;
};
/**
 * 华氏药品信息推送
 * request: pushDrugSkuUsingPOST
 * @param msg - msg
 */
export const pushDrugSkuUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/nologin/hospital/u8/pushDrugSku';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['msg'] !== undefined) {
    queryParameters['msg'] = parameters['msg'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const pushDrugSkuUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/nologin/hospital/u8/pushDrugSku'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['msg'] !== undefined) {
    queryParameters['msg'] = parameters['msg'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const pushDrugSkuUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/nologin/hospital/u8/pushDrugSku';
  if (parameters['msg'] !== undefined) {
    queryParameters['msg'] = parameters['msg'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/nologin/hospital/u8/pushDrugSku',
    queryTType: 'post',
  };
  return result;
};
/**
 * 权益包订单支付回调
 * request: rightOrderPayNotifyUsingPOST
 * @param params - params
 */
export const rightOrderPayNotifyUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/nologin/rightOrder/trans/payNotify';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['params'] !== undefined) {
    queryParameters['params'] = parameters['params'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const rightOrderPayNotifyUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/nologin/rightOrder/trans/payNotify'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['params'] !== undefined) {
    queryParameters['params'] = parameters['params'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const rightOrderPayNotifyUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/nologin/rightOrder/trans/payNotify';
  if (parameters['params'] !== undefined) {
    queryParameters['params'] = parameters['params'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/nologin/rightOrder/trans/payNotify',
    queryTType: 'post',
  };
  return result;
};
/**
 * 权益包订单退款回调
 * request: rightOrderRefundNotifyUsingPOST
 * @param params - params
 */
export const rightOrderRefundNotifyUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/nologin/rightOrder/trans/refundNotify';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['params'] !== undefined) {
    queryParameters['params'] = parameters['params'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const rightOrderRefundNotifyUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/nologin/rightOrder/trans/refundNotify'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['params'] !== undefined) {
    queryParameters['params'] = parameters['params'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const rightOrderRefundNotifyUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/nologin/rightOrder/trans/refundNotify';
  if (parameters['params'] !== undefined) {
    queryParameters['params'] = parameters['params'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/nologin/rightOrder/trans/refundNotify',
    queryTType: 'post',
  };
  return result;
};
/**
 * 是否弹框提示企业二维码
 * request: isShowEnterpriseQrcodeUsingGET
 * @param X-Fast-UserId - X-Fast-UserId
 */
export const isShowEnterpriseQrcodeUsingGET = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/qrcode/notice/query';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const isShowEnterpriseQrcodeUsingGET_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/qrcode/notice/query'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const isShowEnterpriseQrcodeUsingGETURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/qrcode/notice/query';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/qrcode/notice/query',
    queryTType: 'get',
  };
  return result;
};
/**
 * 权益包订单支付
 * request: rightTransPayUsingPOST
 * @param req - req
 * @param X-Fast-UserId - X-Fast-UserId
 * @param X-Fast-OpenId - X-Fast-OpenId
 * @param X-Fast-RemoteIp - X-Fast-RemoteIp
 * @param X-Fast-Platform - X-Fast-Platform
 */
export const rightTransPayUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/rightOrder/trans/pay';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const rightTransPayUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/rightOrder/trans/pay'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const rightTransPayUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/rightOrder/trans/pay';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/rightOrder/trans/pay',
    queryTType: 'post',
  };
  return result;
};
/**
 * 权益包订单退款
 * request: rightTransRefundUsingPOST
 * @param req - req
 */
export const rightTransRefundUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/rightOrder/trans/refund';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const rightTransRefundUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/rightOrder/trans/refund'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const rightTransRefundUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/rightOrder/trans/refund';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/rightOrder/trans/refund',
    queryTType: 'post',
  };
  return result;
};
/**
 * revicerPicturecContent
 * request: revicerPicturecContentUsingPOST
 * @param map - map
 */
export const revicerPicturecContentUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/sf/picture/content';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['map'] !== undefined) {
    queryParameters['map'] = parameters['map'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const revicerPicturecContentUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/sf/picture/content'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['map'] !== undefined) {
    queryParameters['map'] = parameters['map'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const revicerPicturecContentUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/sf/picture/content';
  if (parameters['map'] !== undefined) {
    queryParameters['map'] = parameters['map'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/sf/picture/content',
    queryTType: 'post',
  };
  return result;
};
/**
 * addOutboundOrder
 * request: addOutboundOrderUsingPOST
 * @param req - req
 */
export const addOutboundOrderUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/u8/outboundorder';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const addOutboundOrderUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/u8/outboundorder'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const addOutboundOrderUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/u8/outboundorder';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/u8/outboundorder',
    queryTType: 'post',
  };
  return result;
};
/**
 * 获取banner图
 * request: getCodBannerUsingGET
 * @param bannerType - 获取的banner图的bannerType类型,不传则默认为后端自定义的标识,测试可用数据库现有类型测试
 */
export const getCodBannerUsingGET = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/user/cod/banner';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['bannerType'] !== undefined) {
    body = parameters['bannerType'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const getCodBannerUsingGET_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/user/cod/banner'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['bannerType'] !== undefined) {
    body = parameters['bannerType'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const getCodBannerUsingGETURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/user/cod/banner';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/user/cod/banner',
    queryTType: 'get',
  };
  return result;
};
/**
 * 提交申请服务, 需data-form提交
 * request: applyUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param files - files
 * @param ykfPatientId - 患者端就诊人ID
 * @param patientId - 医生端就诊人ID
 * @param doctorId - 医生ID
 * @param userId - 用户ID，不需要前端传
 * @param diseaseType -
 * @param visitHospital - 就诊医院
 * @param visitDept - 就诊科室
 * @param visitDoctor - 就诊医生
 * @param visitTime - 就诊时间
 * @param reportType - 报告类型
 * @param checkTime - 检查时间, 如：2022/04/28
 * @param descrip - 状态描述
 */
export const applyUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/user/cod/report/apply';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['files'] !== undefined) {
    queryParameters['files'] = parameters['files'];
  }
  if (parameters['ykfPatientId'] !== undefined) {
    queryParameters['ykfPatientId'] = parameters['ykfPatientId'];
  }
  if (parameters['patientId'] !== undefined) {
    queryParameters['patientId'] = parameters['patientId'];
  }
  if (parameters['doctorId'] !== undefined) {
    queryParameters['doctorId'] = parameters['doctorId'];
  }
  if (parameters['userId'] !== undefined) {
    queryParameters['userId'] = parameters['userId'];
  }
  if (parameters['diseaseType'] !== undefined) {
    queryParameters['diseaseType'] = parameters['diseaseType'];
  }
  if (parameters['visitHospital'] !== undefined) {
    queryParameters['visitHospital'] = parameters['visitHospital'];
  }
  if (parameters['visitDept'] !== undefined) {
    queryParameters['visitDept'] = parameters['visitDept'];
  }
  if (parameters['visitDoctor'] !== undefined) {
    queryParameters['visitDoctor'] = parameters['visitDoctor'];
  }
  if (parameters['visitTime'] !== undefined) {
    queryParameters['visitTime'] = parameters['visitTime'];
  }
  if (parameters['reportType'] !== undefined) {
    queryParameters['reportType'] = parameters['reportType'];
  }
  if (parameters['checkTime'] !== undefined) {
    queryParameters['checkTime'] = parameters['checkTime'];
  }
  if (parameters['descrip'] !== undefined) {
    queryParameters['descrip'] = parameters['descrip'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const applyUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/user/cod/report/apply'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['files'] !== undefined) {
    queryParameters['files'] = parameters['files'];
  }
  if (parameters['ykfPatientId'] !== undefined) {
    queryParameters['ykfPatientId'] = parameters['ykfPatientId'];
  }
  if (parameters['patientId'] !== undefined) {
    queryParameters['patientId'] = parameters['patientId'];
  }
  if (parameters['doctorId'] !== undefined) {
    queryParameters['doctorId'] = parameters['doctorId'];
  }
  if (parameters['userId'] !== undefined) {
    queryParameters['userId'] = parameters['userId'];
  }
  if (parameters['diseaseType'] !== undefined) {
    queryParameters['diseaseType'] = parameters['diseaseType'];
  }
  if (parameters['visitHospital'] !== undefined) {
    queryParameters['visitHospital'] = parameters['visitHospital'];
  }
  if (parameters['visitDept'] !== undefined) {
    queryParameters['visitDept'] = parameters['visitDept'];
  }
  if (parameters['visitDoctor'] !== undefined) {
    queryParameters['visitDoctor'] = parameters['visitDoctor'];
  }
  if (parameters['visitTime'] !== undefined) {
    queryParameters['visitTime'] = parameters['visitTime'];
  }
  if (parameters['reportType'] !== undefined) {
    queryParameters['reportType'] = parameters['reportType'];
  }
  if (parameters['checkTime'] !== undefined) {
    queryParameters['checkTime'] = parameters['checkTime'];
  }
  if (parameters['descrip'] !== undefined) {
    queryParameters['descrip'] = parameters['descrip'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const applyUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/user/cod/report/apply';
  if (parameters['files'] !== undefined) {
    queryParameters['files'] = parameters['files'];
  }
  if (parameters['ykfPatientId'] !== undefined) {
    queryParameters['ykfPatientId'] = parameters['ykfPatientId'];
  }
  if (parameters['patientId'] !== undefined) {
    queryParameters['patientId'] = parameters['patientId'];
  }
  if (parameters['doctorId'] !== undefined) {
    queryParameters['doctorId'] = parameters['doctorId'];
  }
  if (parameters['userId'] !== undefined) {
    queryParameters['userId'] = parameters['userId'];
  }
  if (parameters['diseaseType'] !== undefined) {
    queryParameters['diseaseType'] = parameters['diseaseType'];
  }
  if (parameters['visitHospital'] !== undefined) {
    queryParameters['visitHospital'] = parameters['visitHospital'];
  }
  if (parameters['visitDept'] !== undefined) {
    queryParameters['visitDept'] = parameters['visitDept'];
  }
  if (parameters['visitDoctor'] !== undefined) {
    queryParameters['visitDoctor'] = parameters['visitDoctor'];
  }
  if (parameters['visitTime'] !== undefined) {
    queryParameters['visitTime'] = parameters['visitTime'];
  }
  if (parameters['reportType'] !== undefined) {
    queryParameters['reportType'] = parameters['reportType'];
  }
  if (parameters['checkTime'] !== undefined) {
    queryParameters['checkTime'] = parameters['checkTime'];
  }
  if (parameters['descrip'] !== undefined) {
    queryParameters['descrip'] = parameters['descrip'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/user/cod/report/apply',
    queryTType: 'post',
  };
  return result;
};
/**
 * 申请结果
 * request: pageReportApplyUsingPOST
 * @param X-Fast-UserId - X-Fast-UserId
 * @param pageParamReq - pageParamReq
 */
export const pageReportApplyUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/user/cod/report/apply/list';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['pageParamReq'] !== undefined) {
    body = parameters['pageParamReq'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const pageReportApplyUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/api/v1/user/cod/report/apply/list'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['pageParamReq'] !== undefined) {
    body = parameters['pageParamReq'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const pageReportApplyUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/api/v1/user/cod/report/apply/list';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/api/v1/user/cod/report/apply/list',
    queryTType: 'post',
  };
  return result;
};
/**
 * 获取疫情公告(C端页面)
 * request: epidemicNotificationUsingPOST
 * @param req - req
 */
export const epidemicNotificationUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/hospital/hospitalMap/epidemicNotification';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const epidemicNotificationUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/hospital/hospitalMap/epidemicNotification'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const epidemicNotificationUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/hospital/hospitalMap/epidemicNotification';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/hospital/hospitalMap/epidemicNotification',
    queryTType: 'post',
  };
  return result;
};
/**
 * 获取标准科室列表
 * request: getStandardDepartmentUsingPOST
 */
export const getStandardDepartmentUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/hospital/hospitalMap/getStandardDepartment';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const getStandardDepartmentUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/hospital/hospitalMap/getStandardDepartment'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const getStandardDepartmentUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/hospital/hospitalMap/getStandardDepartment';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/hospital/hospitalMap/getStandardDepartment',
    queryTType: 'post',
  };
  return result;
};
/**
 * 查询医院详细信息
 * request: queryHospitalDetailsUsingPOST
 * @param req - req
 */
export const queryHospitalDetailsUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/hospital/hospitalMap/hospitaldetails';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryHospitalDetailsUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/hospital/hospitalMap/hospitaldetails'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const queryHospitalDetailsUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/hospital/hospitalMap/hospitaldetails';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/hospital/hospitalMap/hospitaldetails',
    queryTType: 'post',
  };
  return result;
};
/**
 * 通过科室或位置获取推荐医院
 * request: recommendedHospitalUsingPOST
 * @param req - req
 */
export const recommendedHospitalUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/hospital/hospitalMap/recommendedHospital';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const recommendedHospitalUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/hospital/hospitalMap/recommendedHospital'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const recommendedHospitalUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/hospital/hospitalMap/recommendedHospital';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/hospital/hospitalMap/recommendedHospital',
    queryTType: 'post',
  };
  return result;
};
/**
 * healthCheck
 * request: healthCheckUsingGET
 */
export const healthCheckUsingGET = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/mth/healthCheck';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const healthCheckUsingGET_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/mth/healthCheck'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const healthCheckUsingGETURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/mth/healthCheck';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/mth/healthCheck',
    queryTType: 'get',
  };
  return result;
};
/**
 * healthCheck
 * request: healthCheckUsingHEAD
 */
export const healthCheckUsingHEAD = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/mth/healthCheck';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('head', domain + path, body, queryParameters, form, config);
};
export const healthCheckUsingHEAD_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/mth/healthCheck'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('head', domain + path, body, queryParameters, form, config);
};
export const healthCheckUsingHEADURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/mth/healthCheck';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/mth/healthCheck',
    queryTType: 'head',
  };
  return result;
};
/**
 * healthCheck
 * request: healthCheckUsingPOST
 */
export const healthCheckUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/mth/healthCheck';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const healthCheckUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/mth/healthCheck'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const healthCheckUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/mth/healthCheck';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/mth/healthCheck',
    queryTType: 'post',
  };
  return result;
};
/**
 * healthCheck
 * request: healthCheckUsingPUT
 */
export const healthCheckUsingPUT = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/mth/healthCheck';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('put', domain + path, body, queryParameters, form, config);
};
export const healthCheckUsingPUT_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/mth/healthCheck'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('put', domain + path, body, queryParameters, form, config);
};
export const healthCheckUsingPUTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/mth/healthCheck';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/mth/healthCheck',
    queryTType: 'put',
  };
  return result;
};
/**
 * healthCheck
 * request: healthCheckUsingDELETE
 */
export const healthCheckUsingDELETE = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/mth/healthCheck';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config);
};
export const healthCheckUsingDELETE_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/mth/healthCheck'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config);
};
export const healthCheckUsingDELETEURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/mth/healthCheck';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/mth/healthCheck',
    queryTType: 'delete',
  };
  return result;
};
/**
 * healthCheck
 * request: healthCheckUsingOPTIONS
 */
export const healthCheckUsingOPTIONS = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/mth/healthCheck';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('options', domain + path, body, queryParameters, form, config);
};
export const healthCheckUsingOPTIONS_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/mth/healthCheck'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('options', domain + path, body, queryParameters, form, config);
};
export const healthCheckUsingOPTIONSURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/mth/healthCheck';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/mth/healthCheck',
    queryTType: 'options',
  };
  return result;
};
/**
 * healthCheck
 * request: healthCheckUsingPATCH
 */
export const healthCheckUsingPATCH = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/mth/healthCheck';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('patch', domain + path, body, queryParameters, form, config);
};
export const healthCheckUsingPATCH_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/mth/healthCheck'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('patch', domain + path, body, queryParameters, form, config);
};
export const healthCheckUsingPATCHURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/mth/healthCheck';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/mth/healthCheck',
    queryTType: 'patch',
  };
  return result;
};
/**
 * 查询预约信息
 * request: listUsingPOST_1
 * @param info - info
 */
export const listUsingPOST_1 = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/v1/hospital/jywyService/list';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['info'] !== undefined) {
    body = parameters['info'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const listUsingPOST_1_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/v1/hospital/jywyService/list'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['info'] !== undefined) {
    body = parameters['info'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const listUsingPOST_1URL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/v1/hospital/jywyService/list';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/v1/hospital/jywyService/list',
    queryTType: 'post',
  };
  return result;
};
/**
 * 查询预约信息详情
 * request: queryByIdUsingGET_2
 * @param orderNo - orderNo
 */
export const queryByIdUsingGET_2 = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/v1/hospital/jywyService/queryById';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['orderNo'] !== undefined) {
    queryParameters['orderNo'] = parameters['orderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const queryByIdUsingGET_2_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/v1/hospital/jywyService/queryById'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['orderNo'] !== undefined) {
    queryParameters['orderNo'] = parameters['orderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const queryByIdUsingGET_2URL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/v1/hospital/jywyService/queryById';
  if (parameters['orderNo'] !== undefined) {
    queryParameters['orderNo'] = parameters['orderNo'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/v1/hospital/jywyService/queryById',
    queryTType: 'get',
  };
  return result;
};
/**
 * 权益映射查询
 * request: qyCodeQueryUsingGET
 */
export const qyCodeQueryUsingGET = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/v1/hospital/jywyService/qyCodeQuery';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const qyCodeQueryUsingGET_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/v1/hospital/jywyService/qyCodeQuery'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('get', domain + path, body, queryParameters, form, config);
};
export const qyCodeQueryUsingGETURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/v1/hospital/jywyService/qyCodeQuery';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/v1/hospital/jywyService/qyCodeQuery',
    queryTType: 'get',
  };
  return result;
};
/**
 * 变更预约信息
 * request: updateUsingPOST_1
 * @param req - req
 */
export const updateUsingPOST_1 = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/v1/hospital/jywyService/update';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const updateUsingPOST_1_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/v1/hospital/jywyService/update'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const updateUsingPOST_1URL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/v1/hospital/jywyService/update';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/v1/hospital/jywyService/update',
    queryTType: 'post',
  };
  return result;
};
/**
 * 上传附件
 * request: uploadFileUsingPOST
 * @param file - file
 * @param orderNo - orderNo
 * @param userId - userId
 */
export const uploadFileUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/v1/hospital/jywyService/upload';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['file'] !== undefined) {
    queryParameters['file'] = parameters['file'];
  }
  if (parameters['orderNo'] !== undefined) {
    queryParameters['orderNo'] = parameters['orderNo'];
  }
  if (parameters['userId'] !== undefined) {
    queryParameters['userId'] = parameters['userId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const uploadFileUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/v1/hospital/jywyService/upload'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['file'] !== undefined) {
    queryParameters['file'] = parameters['file'];
  }
  if (parameters['orderNo'] !== undefined) {
    queryParameters['orderNo'] = parameters['orderNo'];
  }
  if (parameters['userId'] !== undefined) {
    queryParameters['userId'] = parameters['userId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const uploadFileUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/v1/hospital/jywyService/upload';
  if (parameters['file'] !== undefined) {
    queryParameters['file'] = parameters['file'];
  }
  if (parameters['orderNo'] !== undefined) {
    queryParameters['orderNo'] = parameters['orderNo'];
  }
  if (parameters['userId'] !== undefined) {
    queryParameters['userId'] = parameters['userId'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/v1/hospital/jywyService/upload',
    queryTType: 'post',
  };
  return result;
};
/**
 * mthTest
 * request: mthTestUsingPOST
 */
export const mthTestUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/v1/test/mth/hospital';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const mthTestUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/v1/test/mth/hospital'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const mthTestUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/v1/test/mth/hospital';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/v1/test/mth/hospital',
    queryTType: 'post',
  };
  return result;
};
/**
 * ocrTest
 * request: ocrTestUsingPOST
 * @param req - req
 */
export const ocrTestUsingPOST = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/v1/test/mth/ocrTest';
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const ocrTestUsingPOST_NOTZULL = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = '/v1/test/mth/ocrTest'.replace('/zuul', '');
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters['req'] !== undefined) {
    body = parameters['req'];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  return request('post', domain + path, body, queryParameters, form, config);
};
export const ocrTestUsingPOSTURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/v1/test/mth/ocrTest';
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  let result = {
    url:
      domain +
      path +
      (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : ''),
    path: '/v1/test/mth/ocrTest',
    queryTType: 'post',
  };
  return result;
};
