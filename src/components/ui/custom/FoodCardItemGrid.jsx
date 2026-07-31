
export default function FoodCardItemGrid(props){

    return (
      <div className="grid border border-4 border-amber-500 w-95/100 m-auto grid-cols-4 gap-4">
        {props.children}
      </div>
    );

}