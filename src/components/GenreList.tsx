import useGenres from "../hooks/useGenre";

const GenreList = () => {
  const { data } = useGenres();

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
