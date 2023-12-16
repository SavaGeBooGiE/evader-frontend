import React, { PropsWithChildren } from 'react';
import { Table } from 'reactstrap';

import { ExpenditureType } from '../../types/types';
import totalExpenditure from '../../utils/total-expenditure';
import ExpenditureTableRow from './expenditure-table-row';

import * as styles from './styles';

export default function ExpenditureTable({
  items,
}: PropsWithChildren<{ items: ExpenditureType[] }>) {
  const total = totalExpenditure(items).toLocaleString('en-IN', {
    maximumFractionDigits: 2,
    style: 'currency',
    currency: 'INR',
  });

  return (
    <Table hover>
      <thead>
        <tr>
          <styles.TableHeader>Name</styles.TableHeader>
          <styles.TableHeader>Unit Price</styles.TableHeader>
          <styles.TableHeader>Quantity</styles.TableHeader>
          <styles.TableHeader />
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <ExpenditureTableRow data={item} key={item.id} />
        ))}
        <tr>
          <styles.TableData colSpan={2} />
          <styles.TableData colSpan={1}>
            <strong>Total</strong> : {total}
          </styles.TableData>
          <styles.TableData />
        </tr>
      </tbody>
    </Table>
  );
}
