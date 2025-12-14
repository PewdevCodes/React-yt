import RightCardContent from './RightCardContent';

const RightCard = (props) => {
  return (
    <div className="h-full shrink-0 overflow-hidden relative w-80 rounded-[2.5rem] shadow-lg">
      <img className="h-full w-full object-cover" src={props.img} alt="" />
      <RightCardContent color={props.color} id={props.id} tag={props.tag} />
    </div>
  );
};

export default RightCard;
