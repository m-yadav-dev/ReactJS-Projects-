import ListItems from "../ListItems";

const ListWithDragDrop = ({ listItems }) => {



  return (
    <>
      <div className="min-h-screen max-w-full flex items-center justify-center bg-gradient-to-r via-gray-800 to-gray-700 from-gray-900">
        <div className="w-full max-w-[400px] min-h-[500px] bg-gradient-to-b from-indigo-300 to-indigo-400 rounded-lg shadow-lg p-4 flex  gap-4 justify-center">
          <ul className="flex flex-col gap-4 justify-center">
            {listItems.map((item) => (
              <ListItems key={item.id} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ListWithDragDrop;
