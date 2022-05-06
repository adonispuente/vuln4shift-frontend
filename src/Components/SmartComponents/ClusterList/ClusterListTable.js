import React, { Fragment, useEffect, useState } from 'react';
import BaseTable from '../BaseTable';
import {
  CLUSTER_LIST_TABLE_COLUMNS,
  CLUSTER_LIST_TABLE_MAPPER,
} from '../../../Helpers/constants';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClusterListTable } from '../../../Store/Actions';
import BaseToolbar from '../BaseToolbar';
import BottomPagination from '../../PresentationalComponents/BottomPagination';

const ClusterDetailTable = () => {
  const dispatch = useDispatch();
  const { clusters, total_items } = useSelector(
    ({ ClusterListStore }) => ClusterListStore
  );

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // API response delay simulation
    setTimeout(() => {
      dispatch(fetchClusterListTable());
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Fragment>
      <BaseToolbar page={1} perPage={20} itemCount={total_items} />
      <BaseTable
        isLoading={isLoading}
        columns={CLUSTER_LIST_TABLE_COLUMNS}
        rows={clusters.map((row) => CLUSTER_LIST_TABLE_MAPPER(row))}
      />
      <BottomPagination page={1} perPage={20} itemCount={total_items} />
    </Fragment>
  );
};

export default ClusterDetailTable;