import React from "react";

type Props = {
  title: string;
  value: string;
  icon: HTMLImageElement;
  index: number;
};

const style = ['bg-[#DDEFE0]' , 'bg-[#F4ECDD]','bg-[#EFDADA]','bg-[#DEE0EF]']

function InfoCard({ title, value, icon, index }: Props) {
  return <div className={` ${style[index]} rounded-[10px] px-6 py-5 `}>
        <div className=" flex justify-end">
            <img className=" h-6 aspect-square" src={icon.src} alt='' />
        </div>
        <div className=" font-lato text-sm">
            {title}
        </div>
        <div className=" font-sans font-bold text-2xl">
            {value}
        </div>

  </div>;
}

export default InfoCard;
