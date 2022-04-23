import { Sidebar, PlaylistContainer } from "components";
import { useWatchLater } from "contexts";

export const Main = () => {
  const { watchLaterState } = useWatchLater();
  return (
    <>
      <section className="watchLaterContainer">
        <Sidebar />

        <main className="main-content">
          <div className="margin-1 heading">
            <h2>Watch Later.</h2>
            <p>{watchLaterState.watchLater.length} videos</p>
          </div>

          {watchLaterState.watchLater.map((video) => {
            return <PlaylistContainer video={video} />;
          })}
        </main>
      </section>
    </>
  );
};
