import { HStack, List, ListItem, Image, Text } from "@chakra-ui/react";
import React from "react";
import useData from "../hooks/useData";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-services";

const GenresList = () => {
  const { data } = useGenres();
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
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
