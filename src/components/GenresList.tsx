import {
  HStack,
  List,
  ListItem,
  Image,
  Text,
  Spinner,
  Button,
} from "@chakra-ui/react";
import React from "react";
import useData from "../hooks/useData";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-services";

interface Props {
  onSelecteGenre: (genre: Genre) => void;
}

const GenresList = ({ onSelecteGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize={"32px"}
              src={getCroppedImageUrl(genre.image_background)}
              borderRadius={8}
            />
            <Button
              onClick={() => onSelecteGenre(genre)}
              fontSize="lg"
              variant="link"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
