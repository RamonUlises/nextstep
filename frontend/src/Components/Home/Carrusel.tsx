import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/Components/ui/carrousel';
import { Card, CardContent } from '../ui/card';

export function CarouselSpacing({ images }: { images: string[] }) {
  return (
    <Carousel className="max-w-[70%]">
      <CarouselContent className="-ml-1">
        {images.map((img, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3 flex justify-center">
            <div className="p-1 w-[90%]">
              <Card className="dark:bg-transparent shadow-none border-none">
                <CardContent className="flex aspect-square p-0">
                  <img
                    src={img}
                    alt={`Image ${index}`}
                    className="w-full h-full object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="dark:text-white" />
      <CarouselNext className="dark:text-white" />
    </Carousel>
  );
}
