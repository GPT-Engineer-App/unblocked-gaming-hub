import React from "react";
import { Box, Heading, Text, Image, SimpleGrid, Link, Container } from "@chakra-ui/react";

const GameCard = ({ title, description, imageUrl, url }) => (
  <Link href={url} isExternal>
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
      <Image src={imageUrl} alt={title} />
      <Heading as="h3" size="md" mt={2}>
        {title}
      </Heading>
      <Text mt={2}>{description}</Text>
    </Box>
  </Link>
);

const Index = () => {
  const games = [
    {
      title: "Fortnite",
      description: "Battle royale game with building and crafting elements.",
      imageUrl: "https://images.unsplash.com/photo-1594652634010-275456c808d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmb3J0bml0ZSUyMGdhbWUlMjBzY3JlZW5zaG90fGVufDB8fHx8MTcxMjg3OTI2OHww&ixlib=rb-4.0.3&q=80&w=1080",
      url: "https://www.epicgames.com/fortnite/",
    },
    {
      title: "Call of Duty: Warzone",
      description: "Free-to-play battle royale game in the Call of Duty franchise.",
      imageUrl: "https://images.unsplash.com/photo-1519540393135-f52583f80e8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYWxsJTIwb2YlMjBkdXR5JTIwd2Fyem9uZSUyMHNjcmVlbnNob3R8ZW58MHx8fHwxNzEyODc5MjY4fDA&ixlib=rb-4.0.3&q=80&w=1080",
      url: "https://www.callofduty.com/warzone",
    },
    {
      title: "Minecraft",
      description: "Sandbox game with building, crafting, and survival elements.",
      imageUrl: "https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtaW5lY3JhZnQlMjBnYW1lJTIwc2NyZWVuc2hvdHxlbnwwfHx8fDE3MTI4Nzg4NjB8MA&ixlib=rb-4.0.3&q=80&w=1080",
      url: "https://www.minecraft.net/",
    },
    {
      title: "Roblox",
      description: "Online game platform with user-created games and experiences.",
      imageUrl: "https://images.unsplash.com/photo-1594652634010-275456c808d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb2Jsb3glMjBnYW1lJTIwc2NyZWVuc2hvdHxlbnwwfHx8fDE3MTI4Nzg4NTl8MA&ixlib=rb-4.0.3&q=80&w=1080",
      url: "https://www.roblox.com/",
    },
  ];

  return (
    <Container maxW="container.lg" py={8}>
      <Heading as="h1" size="2xl" mb={8} textAlign="center">
        Unblocked Gaming Hub
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={8}>
        {games.map((game, index) => (
          <GameCard key={index} {...game} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Index;
