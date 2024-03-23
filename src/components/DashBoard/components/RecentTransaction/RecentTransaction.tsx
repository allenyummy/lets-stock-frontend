import { IoExpandOutline } from 'react-icons/io5';

import './RecentTransaction.css';

interface Props {
  expanded: boolean;
  onClickExpandButton: (value: boolean) => void;
}

const RecentTransaction = ({ expanded, onClickExpandButton }: Props) => {
  return (
    <div className="recent-transaction-container">
      <div className="header">
        <div className="title">Recent Transaction</div>
        <div className="icon">
          <IoExpandOutline size={'1rem'} onClick={() => onClickExpandButton(!expanded)} />
        </div>
      </div>

      <div className="body">Body</div>
    </div>
  );
};

export default RecentTransaction;
