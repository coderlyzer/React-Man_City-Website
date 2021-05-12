import React, { useEffect, useState } from 'react'
import PlayerCard from '../Utils/playerCard'
import { Slide } from 'react-awesome-reveal'
import { Promise } from 'core-js'
import {
  Claudio,
  Ederson,
  Laporte,
  Mendy,
  Danilo,
  John,
  Otamendi,
  Tosin,
  Kompany,
  Silva,
  Diaz,
  Fabian,
  Luiz,
  Gundo,
  Kevin,
  Sane,
  Raheem,
  Jesus,
  Lukas,
  Sergio,
} from './import'

import { showErrorToast } from '../Utils/tools'
import { CircularProgress } from '@material-ui/core'
import { firebase, playersCollection } from '../../firebase'

const TheTeam = () => {
  const [loading, setLoading] = useState(true)
  const [players, setPlayers] = useState(null)

  useEffect(() => {
    if (!players) {
      playersCollection
        .get()
        .then((snapshot) => {
          const players = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          let promises = []

          players.forEach((player, index) => {
            promises.push(
              new Promise((resolve, reject) => {
                firebase
                  .storage()
                  .ref('players')
                  .child(player.image)
                  .getDownloadURL()
                  .then((url) => {
                    console.log(url)
                    players[index].url = url
                    resolve()
                  })
                  .catch((error) => {
                    reject()
                  })
              }),
            )
          })

          Promise.all(promises).then(() => {
            setPlayers(players)
          })
          ////
        })
        .catch((error) => {
          showErrorToast('Sorry try again later')
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [players])

  let cards = [
    {
      url: Ederson,
      number: 1,
      name: 'Ederson',
      lastname: 'Morales',
      position: 'Keeper',
    },
    {
      url: Claudio,
      number: 31,
      name: 'Claudio',
      lastname: 'Bravo',
      position: 'Keeper',
    },

    {
      url: Laporte,
      number: 14,
      name: 'Aymeric',
      lastname: 'Laporte',
      position: 'Defence',
    },
    {
      url: Mendy,
      number: 22,
      name: 'Benjamin',
      lastname: 'Mendy',
      position: 'Defence',
    },
    {
      url: Danilo,
      number: 3,
      name: 'Danilo',
      lastname: 'Brabosa',
      position: 'Defence',
    },
    {
      url: John,
      number: 5,
      name: 'John',
      lastname: 'Stones',
      position: 'Defence',
    },
    {
      url: Otamendi,
      number: 30,
      name: 'Nicolas',
      lastname: 'Otamendi',
      position: 'Defence',
    },
    {
      url: Tosin,
      number: 53,
      name: 'Tosin',
      lastname: 'Adarabioyo',
      position: 'Defence',
    },
    {
      url: Kompany,
      number: 4,
      name: 'Vincent',
      lastname: 'Kompany',
      position: 'Defence',
    },
    {
      url: Silva,
      number: 20,
      name: 'Bernardo',
      lastname: 'Silva',
      position: 'Midfield',
    },
    {
      url: Diaz,
      number: 55,
      name: 'Brahim',
      lastname: 'Diaz',
      position: 'Midfield',
    },
    {
      url: Fabian,
      number: 18,
      name: 'Fabian',
      lastname: 'Delph',
      position: 'Midfield',
    },
    {
      url: Luiz,
      number: 25,
      name: 'Fernandinho',
      lastname: 'Luiz Roza',
      position: 'Midfield',
    },
    {
      url: Gundo,
      number: 8,
      name: 'Illkay',
      lastname: 'Gundogan',
      position: 'Midfield',
    },
    {
      url: Kevin,
      number: 17,
      name: 'Kevin',
      lastname: 'De Bruyne',
      position: 'Midfield',
    },
    {
      url: Sane,
      number: 19,
      name: 'Leroy',
      lastname: 'Sane',
      position: 'Midfield',
    },
    {
      url: Raheem,
      number: 7,
      name: 'Raheem',
      lastname: 'Sterling',
      position: 'Midfield',
    },

    {
      url: Jesus,
      number: 33,
      name: 'Gabriel',
      lastname: 'Jesus',
      position: 'Striker',
    },
    {
      url: Lukas,
      number: 12,
      name: 'Lukas',
      lastname: 'Nmecha',
      position: 'Striker',
    },
    {
      url: Sergio,
      number: 10,
      name: 'Sergio',
      lastname: 'Aguero',
      position: 'Striker',
    },
  ]

  const showPlayerByCategory = (category) =>
    cards.map((player, i) => {
      return player.position === category ? (
        <Slide left key={i} triggerOnce>
          <div className="item">
            <PlayerCard
              number={player.number}
              name={player.name}
              lastname={player.lastname}
              bck={player.url}
            />
          </div>
        </Slide>
      ) : null
    })

  return (
    <div className="the_team_container">
      {loading ? (
        <div className="progress">
          <CircularProgress />
        </div>
      ) : (
        <div>
          <div className="team_category_wrapper">
            <div className="title">Keepers</div>
            <div className="team_cards">{showPlayerByCategory('Keeper')}</div>
          </div>

          <div className="team_category_wrapper">
            <div className="title">Defence</div>
            <div className="team_cards">{showPlayerByCategory('Defence')}</div>
          </div>

          <div className="team_category_wrapper">
            <div className="title">Midfield</div>
            <div className="team_cards">{showPlayerByCategory('Midfield')}</div>
          </div>

          <div className="team_category_wrapper">
            <div className="title">Strikers</div>
            <div className="team_cards">{showPlayerByCategory('Striker')}</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default TheTeam
