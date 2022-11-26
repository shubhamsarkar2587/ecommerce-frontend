
const CategoryItem = ({ item }) => {
  return (
    <div className="h-[63vh] w-full relative m-1">
      <img
        className="object-cover h-full w-full"
        alt="category_img"
        src={item.img}
      /> 
      <div className="absolute flex flex-col items-center justify-center top-0 left-0 w-full h-full">
        <h1 className="text-3xl	font-bold text-white mb-5">{item.title}</h1>
        <button className="p-2.5 text-gray-500 bg-white font-semibold">SHOP NOW</button>
      </div> 
    </div>
  )
}

export default CategoryItem;