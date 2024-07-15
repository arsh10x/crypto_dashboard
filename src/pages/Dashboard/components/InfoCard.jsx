import { Tag, Text } from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";

const Info = ({ imgUrl, text, textTag, inverted }) => {
  return (
    <CustomCard
      bgColor={inverted ? "p.purple" : "white"}
      bgImage={imgUrl}
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Tag
        color={inverted ? "p.purple" : "white"}
        bg={inverted ? "white" : "p.purple"}
        borderRadius="full"
      >
        {textTag}
      </Tag>
      <Text
        mt="4"
        fontWeight="medium"
        textStyle="h5"
        color={inverted ? "white" : "black.80"}
      >
        {text}
      </Text>
    </CustomCard>
  );
};

export default Info;
