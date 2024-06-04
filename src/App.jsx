import MainStats from "./Components/MainStats";
import Stats from "./Components/Stats";
import Damage from "./Components/Damage";
import Stuff from "./Components/Stuff";
import Resistances from "./Components/Resistances";
import UtilityStats from "./Components/UtilityStats";
import ItemList from "./Pages/ItemList";

function App() {
  return (
    <>
      <main className="text-white ">
        <div className="flex flex-col ">
          <div className="flex flex-col gap-8 p-4 lg:flex-row lg:gap-24 lg:p-16 ">
            <Stuff />
            <div className="flex flex-col gap-4">
              <MainStats />
              <div className="flex flex-wrap gap gap-x-8">
                <Stats />
                <Damage />
                <Resistances />
                <UtilityStats />
              </div>
            </div>
          </div>
          <ItemList />
        </div>
      </main>
    </>
  );
}

export default App;
