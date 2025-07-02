const Calendar = () => {
  return (
    <div className="col-span-2 row-span-2 bg-bgaccent border rounded-2xl flex flex-col px-8 py-8 gap-4">
      <div className="flex flex-col gap-1">
        <h1 className="font-bold text-[24px] leading-[29px]">8:19 AM</h1>
        <h2 className="font-bold text-[16px] text-mutedcl leading-[19px]">Tuesday, Jun 10</h2>
      </div>
      <div className="flex flex-col px-[12px] py-2 bg-bright h-full rounded-r-[8px] border-l-2 border-accentcl hover:backdrop-brightness-125 justify-between overflow-hidden">
        <div className="flex flex-col gap-2 text-[12px] leading-[15px]">
          <span>9:25 AM meeting with some cool guy</span>
          <span>9:25 AM meeting with some cool guy</span>
        </div>

        <span className="underline text-mutedcl text-[12px] leading-[15px]">See all</span>
      </div>
    </div>
  )
}

export default Calendar
