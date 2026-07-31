
export default function FoodCardItemGrid(props){

    return (
      <div className="grid  border-amber-500 w-95/100 m-auto grid-cols-4 gap-4 grid-rows-none p-4 mt-5">
        {props.children}
      </div>
    );

}