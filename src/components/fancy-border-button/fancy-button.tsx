import * as React from 'react';
import './fancy-button.css';

export interface IFancyButtonProps {
  text: string;
}

export default class FancyButton extends React.Component<IFancyButtonProps> {
  public render() {
    return (
      <div className='wrapper'>
        <button className='btn bg-white text-black/90'>{this.props.text}</button>
      </div>
    );
  }
}
