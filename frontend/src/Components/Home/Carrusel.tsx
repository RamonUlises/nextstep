import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/Components/ui/carrousel';
import { Card, CardContent } from '../ui/card';

import img from '@/assets/image-login.png';

export function CarouselSpacing() {
  return (
    <Carousel className="max-w-[70%]">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className='dark:bg-transparent shadow-none border-none'>
                <CardContent className="flex aspect-square items-center justify-center p-0 bg-transparent">
                  <img src={img} alt="" className='w-[80%] md:w-[90%] md:h-full object-cover' />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='dark:text-white' />
      <CarouselNext className='dark:text-white' />
    </Carousel>
  );
}
