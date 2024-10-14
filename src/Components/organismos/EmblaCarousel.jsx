

import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import style from "../styles/Home.module.css"
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'


export function EmblaCarousel() {
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true },[Autoplay()] )

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) // Access API
    }
  }, [emblaApi])

  return (
    <div className={style.embla} ref={emblaRef}>
      <div className={style.embla__container}>
        <div className={style.embla__slide}>Slide 1
          <Image src="/buzo jogging.jpeg" alt="Slide 1" width={200} height={200} />
          <div></div>
        </div>
        <div className={style.embla__slide}>Slide 2
          <Image src="/buzo lluvia.jpeg" alt="Slide 2" width={200} height={200} />
        </div>
        <div className={style.embla__slide}>Slide 3
          <Image src="/campera inflable lluvia.jpeg" alt="Slide 3" width={200} height={200} />
        </div>
        <div className={style.embla__slide}>Slide 4
          <Image src="/campera inflable niño.jpeg" alt="Slide 4" width={200} height={200} />
        </div>
        <div className={style.embla__slide}>Slide 5
          <Image src="/pantalon marino.jpeg" alt="Slide 5" width={200} height={200} />
        </div>
        <div className={style.embla__slide}>Slide 6
          <Image src="/pantalon mujer noche.jpeg" alt="Slide 6" width={200} height={200} />
        </div> {/* Aquí se cierra correctamente el div de Slide 6 */}
        <div className={style.embla__slide}>Slide 7
          <Image src="/remera blanca.jpeg" alt="Slide 7" width={200} height={200} />
        </div>
        <div className={style.embla__slide}>Slide 8
          <Image src="/remera celeste.jpeg" alt="Slide 8" width={200} height={200} />
        </div>
        <div className={style.embla__slide}>Slide 9
          <Image src="/all stars rojas.jpeg" alt="Slide 9" width={200} height={200} />
        </div>
        <div className={style.embla__slide}>Slide 10
          <Image src="/botitas nike.jpeg" alt="Slide 10" width={200} height={200} />
        </div>
      </div>
    </div>
  );
}