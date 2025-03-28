type cardType={
  imgLink:string;
  name:string;
  desc:string;
}
type Props={
  cardInfo:cardType;
}
const Card = ({cardInfo}:Props) => {
  return (
    <div className="h-70 w-70 bg-zinc-600 flex flex-col items-center  rounded-lg justify-center">
     
      <div className="w-40 h-40 overflow-hidden rounded-full">
      <img 
        className="w-full h-full object-cover"
        src={cardInfo.imgLink}
         alt="Card image" />
     
      </div>
      <p className="text-2xl font-bold">{cardInfo.name}</p>
      <p className="text-center">{cardInfo.desc}</p>
    </div>
  )
}

export default Card
