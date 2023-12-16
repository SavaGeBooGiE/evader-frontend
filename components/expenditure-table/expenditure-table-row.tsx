import React, { PropsWithChildren } from 'react';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { toast, ToastContainer } from 'react-toastify';
import { Button } from 'reactstrap';

import { useAuth } from '../../context/auth';
import DeleteExpenditureService from '../../services/delete-expenditure-service';
import EventEmitterService from '../../services/event-emitter-service';
import { ExpenditureType } from '../../types/types';

import * as styles from './styles';

export default function ExpenditureTableRow({
  data,
}: PropsWithChildren<{ data: ExpenditureType }>) {
  const [expand, setExpand] = React.useState(false);
  const { token } = useAuth();

  const deleteExpenditureHandler = async () => {
    try {
      await DeleteExpenditureService(data.id, token!);
      EventEmitterService('expenditure_deleted', { id: data.id });
    } catch (error) {
      toast.error('Something went wrong!');
    }
  };

  return (
    <>
      <tr>
        <styles.TableData>
          <styles.Name>{data.name}</styles.Name>
          <styles.Organization>{data.organization}</styles.Organization>
        </styles.TableData>
        <styles.TableData>{data.unitPrice}</styles.TableData>
        <styles.TableData>{data.quantity}</styles.TableData>
        <styles.TableData>
          <Button color="danger" outline onClick={deleteExpenditureHandler}>
            <RiDeleteBin6Fill />
          </Button>
        </styles.TableData>
      </tr>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
