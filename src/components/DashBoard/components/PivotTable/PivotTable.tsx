import { IoExpandOutline } from 'react-icons/io5';

import './PivotTable.css';

interface Props {
  expanded: boolean;
  onClickExpandButton: (value: boolean) => void;
}

const PivotTable = ({ expanded, onClickExpandButton }: Props) => {
  return (
    <div className="pivot-table-container">
      <div className="header">
        <div className="title">Pivot Table</div>
        <div className="icon">
          <IoExpandOutline size={'1rem'} onClick={() => onClickExpandButton(!expanded)} />
        </div>
      </div>

      <div className="body">Body</div>
    </div>
  );
};

export default PivotTable;
