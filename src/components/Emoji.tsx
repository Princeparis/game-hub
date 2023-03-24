import BullsEye from "../assets/bulls-eye.webp";
import ThumbsUp from "../assets/thumbs-up.webp";
import Meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: Meh, alt: "meh", boxSize: "24px" },
    4: { src: ThumbsUp, alt: "recommended", boxSize: "24px" },
    5: { src: BullsEye, alt: "must play", boxSize: "34px" },
  };
  return <Image {...emojiMap[rating]} boxSize="24px" marginTop={2} />;
};

export default Emoji;
