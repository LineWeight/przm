import React, { Component } from 'react'
import { notify } from 'react-notify-toast'

export default class Swatch extends Component {

  rgb2hex (rgb) {
    return ('#' +
      ('0' + rgb[0].toString(16)).slice(-2) +
      ('0' + rgb[1].toString(16)).slice(-2) +
      ('0' + rgb[2].toString(16)).slice(-2)
    )
  }

  copy (hex) {
    document.execCommand('copy', false, hex)
    let myColor = { background: hex, text: '#FFFFFF' }
    notify.show(hex + ': coppied' , 'custom', 2500, myColor)
  }

  render () {
    let {rgb, colorId} = this.props
    let hex = this.rgb2hex(rgb)
    hex = hex.toUpperCase()
    return (
      <div className='swatch' style={{backgroundColor: hex}} onClick={this.copy.bind(this, hex)}>
        <div className='swatchHighlight'>
          <p className='swatchId'>
            {colorId}
          </p>
        </div>
      </div>
    )
  }
}
