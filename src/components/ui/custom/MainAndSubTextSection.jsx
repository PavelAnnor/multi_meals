export function MainAndSubTextSection({ mainText, subText }) {
  return (
    <div className="border-green-300 border-4 text-center flex flex-col p-6 gap-5 figtree-font w-full">
      <h2 className="text-6xl">{mainText}</h2>
      <p className="text-2xl">{subText}</p>
    </div>
  );
}
