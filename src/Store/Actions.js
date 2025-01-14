import * as ActionTypes from '../Store/ActionTypes';
import * as api from '../Helpers/apiHelper';

export const fetchCveListTable = (params) => ({
  type: ActionTypes.FETCH_CVE_LIST_TABLE,
  meta: {
    timestamp: new Date(),
  },
  payload: () => api.fetchCves(params),
});

export const fetchClusterListTable = (params) => ({
  type: ActionTypes.FETCH_CLUSTER_LIST_TABLE,
  meta: {
    timestamp: new Date(),
  },
  payload: () => api.fetchClusters(params),
});

export const fetchCveDetailTable = (cveId, params) => ({
  type: ActionTypes.FETCH_CVE_DETAIL_TABLE,
  meta: {
    timestamp: new Date(),
  },
  payload: () => api.fetchExposedClusters(cveId, params),
});

export const fetchCveDetails = (cveId, params) => ({
  type: ActionTypes.FETCH_CVE_DETAILS,
  meta: {
    timestamp: new Date(),
  },
  payload: () => api.fetchCveDetails(cveId, params),
});

export const fetchClusterDetailTable = (clusterId, params) => ({
  type: ActionTypes.FETCH_CLUSTER_DETAIL_TABLE,
  meta: {
    timestamp: new Date(),
  },
  payload: () => api.fetchClusterCves(clusterId, params),
});

export const fetchClusterDetails = (clusterId, params) => ({
  type: ActionTypes.FETCH_CLUSTER_DETAILS,
  meta: {
    timestamp: new Date(),
  },
  payload: () => api.fetchClusterDetails(clusterId, params),
});
