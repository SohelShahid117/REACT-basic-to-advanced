import "./App.css";
import imgB from "./assets/b.jpg";

function App() {
  const name = "Sohel";
  const user = {
    name: "Hedy Lamarr",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90,
  };
  return (
    <>
      <div className="flex  justify-center">
        <h1 className="text-3xl bg-orange-300 text-white p-5 text-center ">
          Hello {name}
        </h1>
      </div>
      {/* img from public folder */}
      <img className="w-52 h-52" src="./a.jpg" alt="a" />

      {/* img from src--asset folder  */}
      <img className="w-60 h-60" src={imgB} alt="" />

      <div>
        <h2 className="mt-52 text-3xl font-bold">{user.name}</h2>

        <img
          className="w-52 h-52 mt-32 rounded-full ring-4  ring-red-500"
          src={user.imageUrl}
          alt=""
        />

        <img
          style={{
            width: user.imageSize + 50,
            height: user.imageSize + 100,
            // borderRadius: 10,
            borderRadius: 50,
            margin: 20,
          }}
          src={user.imageUrl}
          alt=""
        />
      </div>
    </>
  );
}

export default App;
