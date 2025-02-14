import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [imageCurrentUrl, setImageCurrentUrl] = useState('');

  const handleViewImage = (url: string): void => {
    onOpen();
    setImageCurrentUrl(url);
  };

  return (
    <>
      <SimpleGrid templateColumns="repeat(3, 1fr)" gap="40">
        {cards.map(card => {
          return (
            <Card
              key={card.id}
              data={card}
              viewImage={() => handleViewImage(card.url)}
            />
          );
        })}
      </SimpleGrid>

      <ModalViewImage
        isOpen={isOpen}
        onClose={onClose}
        imgUrl={imageCurrentUrl}
      />
    </>
  );
}
