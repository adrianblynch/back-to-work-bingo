import React, { Component } from 'react'
import './App.css'

const Cell = ({ text, stamped, onClick }) => {

    const className = stamped.includes(text) ? 'stamped' : null

    return <td className={className} onClick={onClick}>
      {text}
    </td>
}

class App extends Component {

  constructor() {
    super()
    this.state = {
      data: [
        ['I just can\'t wait for summer now', 'Has anyone seen my chair', 'It was so hard getting up this morning', 'Happy new year', 'Right, where did we leave things?'],
        ['How old is that mince pie?', 'I keep writing 2016', 'Right, shall we have a quick catch-up?', 'My brain\'s no working today', 'I should\'ve booked this week off'],
        ['I\'ve got about a million emails', 'Yeah not bad, you?', 'So, how was your Christmas?', 'It went so quickly', 'Is anyone else having problems with the internet?'],
        ['My computer\'s on the go slow', 'It seemed to go on forever', 'So tired', 'I need another tea', 'Where is everyone?'],
        ['There\'s something growning in the fridge', 'What day is it again?', 'I think I must have put on about 10 stone', 'I\'ve forgotten how to type', 'Quite quiet really']
      ],
      stamped: []
    }
  }

  shout = () => {

  }

  stamp = (e) => {

    const stamped = new Set(this.state.stamped)
    const text = e.target.innerText

    if (stamped.has(text)) {
      stamped.delete(text)
    } else {
      stamped.add(text)
    }

    if (stamped.size === 25) {
      const audio = new Audio('bingo.wav')
      audio.play()
    }

    this.setState({ stamped: Array.from(stamped) })
  }

  render() {
    return (
      <table>
        <tbody>
          {
            this.state.data.map((row, i) => {
              return <tr key={i}>
                {
                  row.map((cell, i) => {
                    return <Cell
                      key={i}
                      text={cell}
                      stamped={this.state.stamped}
                      onClick={this.stamp}
                    />
                  })
                }
              </tr>
            })
          }
        </tbody>
      </table>
    )
  }
}

export default App
