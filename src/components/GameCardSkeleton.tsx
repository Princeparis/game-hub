import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText mt="4" noOfLines={2} spacing="2" />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
