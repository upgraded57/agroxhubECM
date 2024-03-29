import { BsCupStraw } from "react-icons/bs";

export default function ProductsPicker() {
  const roundedBtnStyle = "btn btn-circle btn-sm p-1 bg-yellow-clr";
  return (
    <div className="max-w-[100vw] px-[4vw]  mb-12">
      <div className="carousel gap-4 w-full">
        <div className="carousel-item carousel-start btn font-normal">
          Beverages
          <BsCupStraw className={roundedBtnStyle} />
        </div>
        <div className="carousel-item btn font-normal">
          Beverages
          <BsCupStraw className={roundedBtnStyle} />
        </div>
        <div className="carousel-item btn font-normal">
          Beverages
          <BsCupStraw className={roundedBtnStyle} />
        </div>
        <div className="carousel-item btn font-normal">
          Beverages
          <BsCupStraw className={roundedBtnStyle} />
        </div>
        <div className="carousel-item btn font-normal">
          Beverages
          <BsCupStraw className={roundedBtnStyle} />
        </div>
        <div className="carousel-item btn font-normal">
          Beverages
          <BsCupStraw className={roundedBtnStyle} />
        </div>
        <div className="carousel-item btn font-normal">
          Beverages
          <BsCupStraw className={roundedBtnStyle} />
        </div>
        <div className="carousel-item btn font-normal">
          Beverages
          <BsCupStraw className={roundedBtnStyle} />
        </div>
        <div className="carousel-item btn font-normal">
          Beverages
          <BsCupStraw className={roundedBtnStyle} />
        </div>
        <div className="carousel-item btn font-normal">
          Beverages
          <BsCupStraw className={roundedBtnStyle} />
        </div>
      </div>
    </div>
  );
}
