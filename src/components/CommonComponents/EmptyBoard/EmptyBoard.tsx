import './EmptyBoard.scss';

const EmptyBoard = () => {
  return (
    <div className='pg-empty-board'>
      <img
        src='./assets/icons/notifications/notifications-empty.png'
        alt='wallet'
        className='pg-empty-board-icon'
      />
      <div className='pg-empty-board-title'>Nothing to show here</div>
    </div>
  );
};

export default EmptyBoard;
