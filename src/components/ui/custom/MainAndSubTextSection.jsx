export function MainAndSubTextSection({ mainText, subText,margin=0 }) {
  return (
    <div className="border-green-300  text-center flex flex-col p-6 gap-5 figtree-font w-full " style={{marginTop: margin+"rem"}}>
      <h2 className="text-5xl">{mainText}</h2>
      <p className="text-xl">{subText}</p>
    </div>
  );
}
