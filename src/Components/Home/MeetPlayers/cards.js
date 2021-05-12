import React from 'react'
import { easePolyOut } from 'd3-ease'
import Animate from 'react-move/Animate'

import Otamendi from '../../../Resources/images/players/Otamendi.png'
import Sterling from '../../../Resources/images/players/Raheem_Sterling.png'
import Kompany from '../../../Resources/images/players/Vincent_Kompany.png'
import PlayerCard from '../../Utils/playerCard'

let card = [
  {
    bottom: 90,
    left: 300,
    player: Kompany,
    number: 10,
  },
  {
    bottom: 60,
    left: 200,
    player: Sterling,
    number: 11,
  },

  {
    bottom: 30,
    left: 100,
    player: Otamendi,
    number: 16,
  },
  {
    bottom: 0,
    left: 0,
    player: Sterling,
    number: 7,
  },
]

const HomeCards = (props) => {
  const showAnimateCards = () =>
    card.map((card, index) => (
      <Animate
        key={index}
        show={props.show}
        start={{
          left: 0,
          bottom: 0,
        }}
        enter={{
          left: [card.left],
          bottom: [card.bottom],
          timing: { delay: 500, duration: 500, ease: easePolyOut },
        }}
      >
        {({ left, bottom }) => (
          <div
            style={{
              position: 'absolute',
              left,
              bottom,
            }}
          >
            <PlayerCard
              number={card.number}
              name="Raheem"
              lastname="Sterling"
              bck={card.player}
            />
          </div>
        )}
      </Animate>
    ))

  return <div>{showAnimateCards()}</div>
}

export default HomeCards
