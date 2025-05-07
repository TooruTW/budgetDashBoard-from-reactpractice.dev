function getTitle(list) {
  const keys = Object.keys(list[0]);
  return keys;
}

export default function Transactions({ monthList }) {
  const titles = getTitle(monthList);
  console.log(titles);
  const cols = `grid-cols-${titles.length}`;

  return (
    <div>
      <div className={`grid ${cols} bg-gray-300 p-4 text-indigo-700 font-bold`}>
        {" "}
        {titles.map((item, index) => {
          return <h3 key={"titles" + index}>{item.toUpperCase()}</h3>;
        })}
      </div>
      <div className="w-full h-100 overflow-y-scroll">
        {monthList.map((list, listIndex) => {
          return (
            <div
              key={listIndex}
              className={`grid ${cols} border-1 border-gray-300 p-4 -mb-0.25`}
            >
              {titles.map((title, titleIndex) => {
                return (
                  <h3
                    className="flex items-center"
                    key={listIndex + "-" + titleIndex}
                  >
                    {list[title]}
                  </h3>
                );
              })}
            </div>
          );
        })}
      </div>
      <div></div>
    </div>
  );
}
