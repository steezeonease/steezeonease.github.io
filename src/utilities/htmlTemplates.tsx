export const InsightsElem = (imgSrc: string, topText: string, bottomText: string) => {
  return (
    <div className="flex space-x-2 sm:space-x-6 flex-col sm:flex-row">
      <div className="sm:flex flex-col justify-center flex-none basis-36">
        <img className="mx-auto" src={imgSrc} alt="Memoji" />
      </div>
      <div className="flex flex-col justify-center space-y-6">
        <p>{topText}</p>
        <p className="font-bold">{bottomText}</p>
      </div>
    </div>
  );
};
