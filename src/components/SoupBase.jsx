/* eslint-disable react/prop-types */
import { soupBase } from '../data/soupBase';
import BaseCard from "./BaseCard";
import ButtonComponent from './ButtonComponent';

const SoupBase = ({ selectedItems, chooseOneOptionOnly, onClick }) => {
  const selectedNone = selectedItems.length === 0;

  return (
    <section className='w-full max-w-[90rem] mx-auto px-2'>
      <div className="grid auto-cols-[90%] sm:auto-cols-[45%] md:auto-cols-[30%] lg:auto-cols-[23%] grid-flow-col gap-[1rem] py-[0.5rem] overflow-x-auto overscroll-contain snap-x snap-mandatory custom-scrollbar">
				{soupBase.map((ingredient) => (
          <BaseCard
          key={ingredient.name}
          ingredient={ingredient}
          selectedItems={selectedItems}
          toggleItem={() => chooseOneOptionOnly(0, ingredient)}
        />				
        ))}
      </div>
      <div className="flex gap-2 justify-end items-center">
        {selectedNone && <p>Nie wybrano bazy</p>}
        <ButtonComponent
          className='my-4 bg-amber-600 disabled:bg-gray-500 disabled:cursor-not-allowed'
          onClick={onClick}
          disabled={selectedNone}>
          	Dalej
        </ButtonComponent>
      </div>
    </section>
  );
};

export default SoupBase;