import { listThingsNeedToBeDoneInTheFuture } from '../../../data';

const FutureIdea = () => {
  return (
    <div>
      <p>Need to think and will be added later:</p>
      <ul>
        {listThingsNeedToBeDoneInTheFuture.map((list: string) => (
          <li>- {list}</li>
        ))}
      </ul>
    </div>
  );
};

export default FutureIdea;
