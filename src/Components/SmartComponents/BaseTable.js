import React, { Fragment, useState } from 'react';
import propTypes from 'prop-types';
import {
  TableComposable,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  ExpandableRowContent,
} from '@patternfly/react-table';
import SkeletonTable from '@redhat-cloud-services/frontend-components/SkeletonTable/SkeletonTable';
import { TableVariant } from '@patternfly/react-table';

const BaseTable = ({
  isLoading,
  columns,
  rows,
  isExpandable = false,
  emptyState,
}) => {
  const [expandedRows, setExpandedRows] = useState([]);

  const setRowExpanded = (row, isExpanding) =>
    setExpandedRows((prevExpanded) => {
      const otherExpandedRows = prevExpanded.filter((r) => r !== row);
      return isExpanding ? [...otherExpandedRows, row] : otherExpandedRows;
    });

  const isRowExpanded = (row) => expandedRows.includes(row);

  return isLoading ? (
    <SkeletonTable
      colSize={columns.length}
      rowSize={20}
      variant={TableVariant.compact}
    />
  ) : (
    <TableComposable variant={TableVariant.compact}>
      <Thead>
        <Tr>
          {isExpandable && <Th />}
          {columns.map((column) => (
            <Th key={column.title} sort={column.sortParam}>
              {column.title}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {rows.length === 0 ? (
          <Tr>
            <Td colSpan={100}>{emptyState}</Td>
          </Tr>
        ) : (
          rows.map((row, rowIndex) => (
            <Fragment key={rowIndex}>
              <Tr>
                {isExpandable && (
                  <Td
                    expand={{
                      rowIndex,
                      isExpanded: isRowExpanded(row.key),
                      onToggle: () =>
                        setRowExpanded(row.key, !isRowExpanded(row.key)),
                    }}
                  />
                )}
                {row.cells.map((cell, cellIndex) => (
                  <Td key={cellIndex} dataLabel={columns[cellIndex].title}>
                    {cell}
                  </Td>
                ))}
              </Tr>
              {isExpandable && (
                <Tr isExpanded={isRowExpanded(row.key)}>
                  <Td colspan={100}>
                    <ExpandableRowContent>
                      {row.expandableContent}
                    </ExpandableRowContent>
                  </Td>
                </Tr>
              )}
            </Fragment>
          ))
        )}
      </Tbody>
    </TableComposable>
  );
};

BaseTable.propTypes = {
  isLoading: propTypes.bool.isRequired,
  columns: propTypes.arrayOf(
    propTypes.shape({
      title: propTypes.node.isRequired,
      sortParam: propTypes.string,
    })
  ).isRequired,
  rows: propTypes.arrayOf(
    propTypes.shape({
      key: propTypes.string.isRequired,
      cells: propTypes.arrayOf(propTypes.node).isRequired,
      expandableContent: propTypes.node,
    })
  ).isRequired,
  isExpandable: propTypes.bool,
  emptyState: propTypes.node.isRequired,
};

export default BaseTable;
