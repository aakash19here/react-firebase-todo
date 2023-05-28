import Todo from "./components/Todo";
import { usePost } from "./lib/use-posts";

const App = () => {
  const { data, isLoading, status } = usePost();
  const image =
    "https://cdn.discordapp.com/attachments/1110143249479381012/1111512703010345070/13808884147_cartoon_monsters_downtown_Tokyo_Studio_Ghibli_style_340cc9c3-a20c-49cb-9986-5f711478f951.png";

  if (status === "error") return <div>Oops , Failed to fetch </div>;

  return (
    <>
      <div>
        {isLoading ? (
          "Loading"
        ) : (
          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data?.map((item) => (
              <Todo
                key={item.id}
                name={item.title}
                description={item.body}
                img={image}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
export default App;
