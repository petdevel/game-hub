import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenre";
import GetCroppedImageUrl from "../service/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

const GenreList = ({ selectedGenreId, onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((item) => (
          <ListItem key={item.id} paddingY="5px">
            <HStack>
              <Image
                objectFit="cover"
                boxSize="32px"
                borderRadius={8}
                src={GetCroppedImageUrl(item.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={item.id === selectedGenreId ? "bold" : "normal"}
                onClick={() => onSelectGenre(item)}
                variant="link"
                fontSize="lg"
              >
                {item.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
