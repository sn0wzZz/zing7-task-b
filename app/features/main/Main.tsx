import Container from '@/app/ui/Container'
import Heading from '@/app/ui/Heading'
import React from 'react'
import Gallery from './Gallery'
import Prices from './Prices'
import Artists from './Artists'
import Hotels from './Hotels'
import Reviews from './Reviews'

export default function Main({gridProps}:any) {
  return (
    <Container gridProps={gridProps}>
      <Heading quickFix='mb-10'>За събитието</Heading>
      <p>
        Ако ви привлича Изтока и източната култура, със сигурност сте чували за
        Акаба. Курортното градче е разположено в северната част на Червено море,
        като е единственият крайбрежен град в Йордания, най-големият и най-гъсто
        населеният в залива Акаба.
        <br />
        <br /> Стратегическото местоположение на града между Азия и Африка го
        прави важно пристанище в продължение на хиляди години. Близостта на
        Акаба до известните туристически забележителности – Вади Рум и Петра,
        утвърждава мястото му на световната карта и го превръща в основна
        туристическа дестинация в Йордания.
        <br />
        <br /> През Акаба минават туристическите и поклонническите маршрути от
        Египет, Арабия и от север. Днес Акаба е едновременно оживен курортен
        град и туристически център, който предлага на посетителите си
        забележителни пейзажи, прекрасен залив и хилядолетна история.
      </p>

      <Gallery />
      <Prices />
      <Artists />
      <Hotels />
      <Reviews />
    </Container>
  )
}
