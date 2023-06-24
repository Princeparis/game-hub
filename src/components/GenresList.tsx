import {
  HStack,
  List,
  ListItem,
  Image,
  Text,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-services";

interface Props {
  selectedGenreId?: number;
  onSelecteGenre: (genre: Genre) => void;
}

const GenresList = ({ selectedGenreId, onSelecteGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                objectFit="cover"
                boxSize={"32px"}
                src={getCroppedImageUrl(genre.image_background)}
                borderRadius={8}
              />
              <Button
                textAlign="left"
                whiteSpace={"normal"}
                onClick={() => onSelecteGenre(genre)}
                fontSize="lg"
                variant="link"
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
